import React, { useState, useCallback } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { FiMoreHorizontal, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import OptionsModal from '../OptionsModal';
import CustomConfirmAlert from '../CustomConfirmAlert';

import { Container } from './styles';

interface OptionDeliverymenModalProps {
  deliverymenId: string;
}

const OptionDeliverymenModal: React.FC<OptionDeliverymenModalProps> = ({
  deliverymenId,
}) => {
  const [openOptionsModal, setOpenOptionsModal] = useState(false);

  const toggleOptionsModal = useCallback(() => {
    setOpenOptionsModal(!openOptionsModal);
  }, [setOpenOptionsModal, openOptionsModal]);

  const handleDeleteDeliverer = useCallback(
    async (gonnaDelete: boolean) => {
      toggleOptionsModal();
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/deliverers/${deliverymenId}`);
    },
    [deliverymenId, toggleOptionsModal],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o entregador: ${deliverymenId} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Excluir entregador"
            message={message}
            handleDelete={handleDeleteDeliverer}
            onClose={onClose}
          />
        );
      },
    });
  }, [deliverymenId, handleDeleteDeliverer]);

  return (
    <>
      <Container>
        <button type="button" onClick={toggleOptionsModal}>
          <FiMoreHorizontal size={16} />
        </button>
        {openOptionsModal && (
          <OptionsModal>
            <Link to={`/deliverymen/edit-deliverymen/${deliverymenId}`}>
              <FiEdit2 color="#4D85EE" /> Editar
            </Link>
            <button type="button" onClick={DeleteConfirm}>
              <FiTrash2 color="#DE3B3B" /> Excluir
            </button>
          </OptionsModal>
        )}
      </Container>
    </>
  );
};

export default OptionDeliverymenModal;
