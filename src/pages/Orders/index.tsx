import React, { useState, useEffect, useMemo } from 'react';
import { FiSearch, FiPlus, FiCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';

import { Container, Content, ContentHeader, Status } from './styles';

import OptionOrderButton from '../../components/OptionOrderButton';

interface Order {
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
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get<Order[]>('/deliveries');

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

  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>Gerenciando encomendas</h1>

          <ContentHeader>
            <SearchInput
              icon={FiSearch}
              type="text"
              placeholder="Buscar por encomendas"
            />

            <Link to="orders/create-order">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </ContentHeader>

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
                          <img
                            src={
                              order.deliveryman.avatar_url ||
                              `https://api.adorable.io/avatars/${order.id}`
                            }
                            alt={order.deliveryman.name}
                          />
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
                        <OptionOrderButton
                          orderId={order.id}
                          street={order.formattedStreet}
                          city={order.formattedCity}
                          zipcode={order.formattedZipCode}
                          withdrawalDate={order.formattedStartDate}
                          deliveryDate={order.formattedEndDate}
                        />
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
