import React, { useCallback, useEffect, useRef, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Link, useHistory } from 'react-router-dom';
import { FiXCircle, FiEdit2, FiTrash2 } from 'react-icons/fi';

import CustomConfirmAlert from '../CustomConfirmAlert';

import api from '../../services/api';

import formatDate from '../../utils/formatDate';

import { Container, Box, Header, Content, Separator, Footer } from './styles';

interface DeliverymenInfoState {
  total_deliveries: number;
  total_deliveries_made: number;
  canceled_deliveries: number;
  deliveries_to_made: number;
  total_problem_deliveries: number;
  created_at: Date;
  formatedServiceTime: string;
}

interface DeliverymenInfo {
  id: string;
}

interface ModalProps {
  setOpenModal(): void;
  deliverymen_info: DeliverymenInfo;
}

const InfoDeliverymenModal: React.FC<ModalProps> = ({
  deliverymen_info,
  setOpenModal,
}) => {
  const [deliverymenInfo, setDeliverymenInfo] = useState<DeliverymenInfoState>(
    {} as DeliverymenInfoState,
  );
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

  useEffect(() => {
    async function loadDelivererInfo() {
      const response = await api.get<DeliverymenInfoState>(
        `/deliverers/${deliverymen_info.id}`,
      );
      const formatedDeliverymen = {
        ...response.data,
        formatedServiceTime: formatDate(response.data.created_at),
      };
      setDeliverymenInfo(formatedDeliverymen);
    }

    loadDelivererInfo();
  }, [deliverymen_info.id]);

  const handleDeleteDeliverymen = useCallback(
    async (gonnaDelete: boolean) => {
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/deliverers/${deliverymen_info.id}`);
      history.push('/');
    },
    [deliverymen_info.id, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o entregador: ${deliverymen_info.id} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Excluir entregador"
            message={message}
            handleDelete={handleDeleteDeliverymen}
            onClose={onClose}
          />
        );
      },
    });
  }, [deliverymen_info.id, handleDeleteDeliverymen]);

  return (
    <>
      <Container>
        <Box ref={boxRef}>
          <Header>
            <h1>Informações da Entregador</h1>
            <button type="button" onClick={closeModal}>
              <FiXCircle />
            </button>
          </Header>

          <Content>
            <span>
              <strong>Funcionario desde:</strong>
              {deliverymenInfo.formatedServiceTime}
            </span>
            <span>
              <strong>Entregas totais:</strong>{' '}
              {deliverymenInfo.total_deliveries}
            </span>
            <span>
              <strong>Entregas realizadas:</strong>
              {deliverymenInfo.total_deliveries_made}
            </span>
            <span>
              <strong>Entregas à fazer:</strong>{' '}
              {deliverymenInfo.deliveries_to_made}
            </span>
            <span>
              <strong>Entregas canceladas:</strong>
              {deliverymenInfo.canceled_deliveries}
            </span>
            <span>
              <strong>Entregas com problemas:</strong>{' '}
              {deliverymenInfo.total_problem_deliveries}
            </span>
          </Content>

          <Separator />

          <Footer>
            <Link to={`deliverymen/edit-deliverymen/${deliverymen_info.id}`}>
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

export default InfoDeliverymenModal;
