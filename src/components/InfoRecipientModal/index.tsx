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

interface RecipientInfo {
  id: string;
  formattedStreet: string;
  formattedCity: string;
  zipcode: string;
}

interface ModalProps {
  setOpenModal(): void;
  recipient_info: RecipientInfo;
}

const InfoRecipientModal: React.FC<ModalProps> = ({
  recipient_info,
  setOpenModal,
}) => {
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

      await api.delete(`/deliveries/${recipient_info.id}`);
      history.push('/');
    },
    [recipient_info.id, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o destinatário: ${recipient_info.id} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Excluir destinatário"
            message={message}
            handleDelete={handleDeleteOrder}
            onClose={onClose}
          />
        );
      },
    });
  }, [recipient_info.id, handleDeleteOrder]);

  return (
    <>
      <Container>
        <Box ref={boxRef}>
          <Header>
            <h1>Informações do destinatário</h1>
            <button type="button" onClick={closeModal}>
              <FiXCircle />
            </button>
          </Header>

          <HeaderContent>
            <span>Endereço completo:</span>
            <span>{recipient_info.formattedStreet}</span>
            <span>{recipient_info.formattedCity}</span>
            <span>{recipient_info.zipcode}</span>
          </HeaderContent>

          <Separator />

          {/* <Dates>
            <h1>Datas</h1>
            <span>
              <strong>Retirada: </strong> {order_info.withdrawalDate}
            </span>
            <span>
              <strong>Entrega: </strong> {order_info.deliveryDate}
            </span>
          </Dates> */}

          <Footer>
            <Link to={`/recipients/edit-recipient/${recipient_info.id}`}>
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

export default InfoRecipientModal;
