import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import Header from '../../../components/Header';
import SearchInput from '../../../components/SearchInput';
import OrderCard from '../../../components/OrderCard';

import { Container, Main, ContentHeader, OrderCards, PlusIcon } from './styles';

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
  product: string;
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

  return (
    <>
      <Header />
      <Container>
        <Main>
          <ContentHeader>
            <h1>Gerenciando encomendas</h1>

            <div>
              <SearchInput type="text" placeholder="Buscar por encomendas" />

              <Link to="orders/create-order">
                <PlusIcon />
                Cadastrar
              </Link>
            </div>
          </ContentHeader>

          <OrderCards>
            {orders.length === 0 ? (
              <span>Ainda nao possui nenhum cadastro</span>
            ) : (
              orders.map(order => (
                <OrderCard
                  key={order.id}
                  order_info={{
                    id: order.id,
                    recipient_name: order.recipient.name,
                    street: order.formattedStreet,
                    city: order.formattedCity,
                    deliverer_avatar: order.deliveryman.avatar_url,
                    deliverer_name: order.deliveryman.name,
                    status: order.status,
                    zipcode: order.recipient.zipcode,
                    withdrawalDate: order.formattedStartDate,
                    deliveryDate: order.formattedEndDate,
                    product: order.product,
                  }}
                />
              ))
            )}
          </OrderCards>
        </Main>
      </Container>
    </>
  );
};

export default Orders;
