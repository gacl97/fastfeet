import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FiSearch, FiPlus, FiCircle, FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import InfoOrderModal from '../../components/InfoOrderModal';

import { useOrder } from '../../hooks/order';

import {
  Container,
  Content,
  Box,
  OrderInfo,
  Separator,
  OrderDeliverer,
  ContentHeader,
  DelivererInfo,
  Status,
} from './styles';

interface OrderInfo {
  order_id: string;
  street: string;
  city: string;
  zipcode: string;
  withdrawalDate: string;
  deliveryDate: string;
}

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
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [orderInfo, setOrderInfo] = useState<OrderInfo>({} as OrderInfo);
  const { loadOrder } = useOrder();

  const toggleInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [openInfoModal]);

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

  const handleSetAddress = useCallback((order: Order) => {
    setOrderInfo({
      order_id: order.id,
      city: order.formattedCity,
      street: order.recipient.street,
      zipcode: order.formattedZipCode,
      withdrawalDate: order.formattedStartDate,
      deliveryDate: order.formattedEndDate,
    });
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

        <ContentHeader>
          <h1>Gerenciando encomendas</h1>

          <div>
            <SearchInput
              icon={FiSearch}
              type="text"
              placeholder="Buscar por encomendas"
            />

            <Link to="orders/create-order">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </div>
        </ContentHeader>

        <Content>
          {orders.length === 0 ? (
            <span>Ainda nao possui nenhum cadastro</span>
          ) : (
            orders.map(order => (
              <Box key={order.id}>
                <span>
                  <FiPackage />
                  {order.recipient.name}
                </span>

                <OrderInfo>
                  <span>
                    <strong>Pedido:</strong>
                    {order.id}
                  </span>

                  <span>
                    <strong>{order.formattedStreet}</strong>
                  </span>

                  <span>
                    <strong>{order.formattedCity}</strong>
                  </span>

                  <Separator />

                  <OrderDeliverer>
                    <DelivererInfo>
                      <img
                        src={
                          order.deliveryman.avatar_url ||
                          `https://avatar.oxro.io/avatar.svg?name=${order.deliveryman.name}?height=186`
                        }
                        alt={order.deliveryman.name}
                      />
                      <span>{order.deliveryman.name}</span>
                    </DelivererInfo>

                    <section>
                      <strong>Status: </strong>
                      <Status type="delivered">
                        <FiCircle />
                        <span>{typeDeliveryStatus.pending}</span>
                      </Status>
                    </section>
                  </OrderDeliverer>

                  <button
                    type="button"
                    onClick={() => {
                      loadOrder(order);
                      handleSetAddress(order);
                      setOpenInfoModal(true);
                    }}
                  >
                    Detalhes
                  </button>
                </OrderInfo>
              </Box>
            ))
          )}
        </Content>

        {openInfoModal && (
          <InfoOrderModal
            setOpenModal={toggleInfoModal}
            order_info={orderInfo}
          />
        )}
      </Container>
    </>
  );
};

export default Orders;
