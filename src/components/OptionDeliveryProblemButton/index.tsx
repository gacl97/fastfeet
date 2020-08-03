import React, { useState, useCallback } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiMoreHorizontal, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import OptionsModal from '../OptionsModal';
import CustomConfirmAlert from '../CustomConfirmAlert';

import InfoDeliveryProblemModal from '../InfoDeliveryProblemModal';

import { Container } from './styles';

interface OptionDeliveryProblemButtonProps {
  deliveryProblemId: string;
  description: string;
}

const OptionDeliveryProblemButton: React.FC<OptionDeliveryProblemButtonProps> = ({
  deliveryProblemId,
  description,
}) => {
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const history = useHistory();

  const toggleOptionsModal = useCallback(() => {
    setOpenOptionsModal(!openOptionsModal);
  }, [setOpenOptionsModal, openOptionsModal]);

  const toggleOptionsInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [setOpenInfoModal, openInfoModal]);

  const handleDeleteProblem = useCallback(
    async (gonnaDelete: boolean) => {
      toggleOptionsModal();
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/delivery/${deliveryProblemId}/cancel-delivery`);
      history.push('/delivery/problems');
    },
    [deliveryProblemId, toggleOptionsModal, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja cancelar a entrega: ${deliveryProblemId} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Cancelar Entrega"
            message={message}
            handleDelete={handleDeleteProblem}
            onClose={onClose}
          />
        );
      },
    });
  }, [deliveryProblemId, handleDeleteProblem]);

  return (
    <>
      <Container>
        <button type="button" onClick={toggleOptionsModal}>
          <FiMoreHorizontal size={16} />
        </button>
        {openOptionsModal && (
          <OptionsModal>
            <button
              type="button"
              onClick={() => {
                setOpenInfoModal(true);
                setOpenOptionsModal(false);
              }}
            >
              <FiEdit2 color="#4D85EE" /> Visualizar
            </button>
            <button type="button" onClick={DeleteConfirm}>
              <FiTrash2 color="#DE3B3B" /> Cancelar encomenda
            </button>
          </OptionsModal>
        )}

        {openInfoModal && (
          <InfoDeliveryProblemModal
            setCloseModal={toggleOptionsInfoModal}
            description={description}
          />
        )}
      </Container>
    </>
  );
};

export default OptionDeliveryProblemButton;
