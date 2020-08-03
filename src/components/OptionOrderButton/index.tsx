import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  ChangeEvent,
} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FiMoreHorizontal, FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import InfoOrderModal from '../InfoOrderModal';
import OptionsModal from '../OptionsModal';
import CustomConfirmAlert from '../CustomConfirmAlert';

import { Container } from './styles';

interface OptionOrderButtonProps {
  orderId: string;
  street: string;
  city: string;
  zipcode: string;
  withdrawalDate: string;
  deliveryDate: string;
}

const OptionOrderButton: React.FC<OptionOrderButtonProps> = ({
  orderId,
  street,
  city,
  zipcode,
  withdrawalDate,
  deliveryDate,
}) => {
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const history = useHistory();

  const toggleOptionsModal = useCallback(() => {
    setOpenOptionsModal(!openOptionsModal);
  }, [setOpenOptionsModal, openOptionsModal]);

  const toggleInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [setOpenInfoModal, openInfoModal]);

  const handleDeleteOrder = useCallback(
    async (gonnaDelete: boolean) => {
      toggleOptionsModal();
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/deliveries/${orderId}`);
      history.push('/');
    },
    [orderId, toggleOptionsModal, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o pedido: ${orderId} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Excluir pedido"
            message={message}
            handleDelete={handleDeleteOrder}
            onClose={onClose}
          />
        );
      },
    });
  }, [orderId, handleDeleteOrder]);

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
              <FiEye color="#8E5BE8" /> Visualizar
            </button>
            <Link to={`/orders/edit-order/${orderId}`}>
              <FiEdit2 color="#4D85EE" /> Editar
            </Link>
            <button type="button" onClick={DeleteConfirm}>
              <FiTrash2 color="#DE3B3B" /> Excluir
            </button>
          </OptionsModal>
        )}

        {openInfoModal && (
          <InfoOrderModal
            setOpenModal={toggleInfoModal}
            street={street}
            city={city}
            zipcode={zipcode}
            withdrawalDate={withdrawalDate}
            deliveryDate={deliveryDate}
          />
        )}
      </Container>
    </>
  );
};

export default OptionOrderButton;
