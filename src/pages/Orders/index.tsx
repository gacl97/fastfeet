import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  FiSearch,
  FiPlus,
  FiMoreHorizontal,
  FiCircle,
  FiEye,
  FiEdit2,
  FiTrash2,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content, Status } from './styles';

import OptionsModal from '../../components/OptionsModal';
import InfoOrderModal from '../../components/InfoOrderModal';

interface Orders {
  id: string;
  recipient: {
    name: string;
    city: string;
    state: string;
    zipcode: string;
    street: string;
    number: string;
  };
  deliveryman: {
    name: string;
    avatar_url: string;
  };
  canceled_at: Date | undefined;
  start_date: Date | undefined;
  end_date: Date | undefined;
  formattedStartDate: string;
  formattedEndDate: string;
  formattedStreet: string;
  formattedCity: string;
  formattedZipCode: string;
  status: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get<Orders[]>('/deliveries');

      setOrders(
        response.data.map(order => {
          return {
            ...order,
            formattedCity: `${order.recipient.city} - ${order.recipient.state}`,
            formattedStreet: `${order.recipient.street}, ${order.recipient.number}`,
            formattedZipCode: [
              order.recipient.zipcode.slice(0, 5),
              '-',
              order.recipient.zipcode.slice(5),
            ].join(''),
            formattedStartDate: formatDate(order.start_date),
            formattedEndDate: formatDate(order.end_date),
          };
        }),
      );
    }

    loadOrders();
  }, []);

  const typeDeliveryStatus = useMemo(() => {
    return {
      delivered: 'Entregue',
      pending: 'Pendente',
      withdrawal: 'Retirada',
      canceled: 'Cancelada',
    };
  }, []);

  const toggleOptionsModal = useCallback(() => {
    setOpenOptionsModal(!openOptionsModal);
  }, [setOpenOptionsModal, openOptionsModal]);

  const toggleInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [setOpenInfoModal, openInfoModal]);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>Gerenciando encomendas</h1>

          <Form onSubmit={() => {}}>
            <Input
              name="search-orders"
              icon={FiSearch}
              type="text"
              placeholder="Buscar por encomendas"
            />

            <Link to="orders/create-order">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </Form>

          {orders.length === 0 ? (
            <span>Ainda não possui nenhuma encomenda cadastrada</span>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Destinatário</th>
                  <th>Entregador</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {orders &&
                  orders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.recipient.name}</td>

                      <td>
                        <section>
                          {order.deliveryman.avatar_url ? (
                            <img
                              src={order.deliveryman.avatar_url}
                              alt={order.deliveryman.name}
                            />
                          ) : (
                            <img
                              src="https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png"
                              alt={order.deliveryman.name}
                            />
                          )}
                          <span>{order.deliveryman.name}</span>
                        </section>
                      </td>

                      <td>{order.recipient.city}</td>
                      <td>{order.recipient.state}</td>
                      <td>
                        <Status type={order.status}>
                          <FiCircle />
                          <span>{typeDeliveryStatus[order.status]}</span>
                        </Status>
                      </td>
                      <td>
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
                            <Link to={`/orders/edit-order/${order.id}`}>
                              <FiEdit2 color="#4D85EE" /> Editar
                            </Link>
                            <button type="button">
                              <FiTrash2 color="#DE3B3B" /> Excluir
                            </button>{' '}
                          </OptionsModal>
                        )}
                        {openInfoModal && (
                          <InfoOrderModal
                            setOpenModal={toggleInfoModal}
                            street={order.formattedStreet}
                            city={order.formattedCity}
                            zipcode={order.formattedZipCode}
                            withdrawalDate={order.formattedStartDate}
                            deliveryDate={order.formattedEndDate}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Orders;
