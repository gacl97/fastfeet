import React, { useCallback, useEffect, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link, useHistory } from 'react-router-dom';
import { FiXCircle, FiEdit2, FiTrash2 } from 'react-icons/fi';

import signature from '../../assets/signature.svg';
import CustomConfirmAlert from '../CustomConfirmAlert';

import api from '../../services/api';

import {
  Container,
  Box,
  Header,
  HeaderContent,
  Separator,
  Dates,
  Signature,
  Footer,
} from './styles';

interface OrderPropsData {
  order_id: string;
  street: string;
  city: string;
  zipcode: string;
  withdrawalDate: string;
  deliveryDate: string;
}

interface ModalProps {
  setOpenModal(): void;
  order_info: OrderPropsData;
}

const InfoOrderModal: React.FC<ModalProps> = ({ setOpenModal, order_info }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const closeModal = useCallback(() => {
    setOpenModal();
  }, [setOpenModal]);

  const handleClickOutside = useCallback(
    event => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpenModal();
      }
    },
    [setOpenModal],
  );

  const handleClickEscapeButton = useCallback(
    event => {
      if (event.keyCode === 27) {
        setOpenModal();
      }
    },
    [setOpenModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleClickEscapeButton);
    document.addEventListener('mousedown', handleClickOutside);
  }, [handleClickEscapeButton, handleClickOutside]);

  const handleDeleteOrder = useCallback(
    async (gonnaDelete: boolean) => {
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/deliveries/${order_info.order_id}`);
      history.push('/');
    },
    [order_info.order_id, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o pedido: ${order_info.order_id} ?`;

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
  }, [order_info.order_id, handleDeleteOrder]);

  return (
    <>
      <Container>
        <Box ref={boxRef}>
          <Header>
            <h1>Informações da encomenda</h1>
            <button type="button" onClick={closeModal}>
              <FiXCircle />
            </button>
          </Header>

          <HeaderContent>
            <span>{order_info.street}</span>
            <span>{order_info.city}</span>
            <span>{order_info.zipcode}</span>
          </HeaderContent>

          <Separator />

          <Dates>
            <h1>Datas</h1>
            <span>
              <strong>Retirada: </strong> {order_info.withdrawalDate}
            </span>
            <span>
              <strong>Entrega: </strong> {order_info.deliveryDate}
            </span>
          </Dates>

          <Separator />

          <Signature>
            <h1>Assinatura do destinatário</h1>

            <img src={signature} alt="signature" />
          </Signature>

          <Separator />

          <Footer>
            <Link to={`/orders/edit-order/${order_info.order_id}`}>
              <FiEdit2 /> Editar
            </Link>
            <button type="button" onClick={DeleteConfirm}>
              <FiTrash2 /> Excluir
            </button>
          </Footer>
        </Box>
      </Container>
    </>
  );
};

export default InfoOrderModal;
