import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import HeaderDeliverer from '../../../components/HeaderDeliverer';
import HeaderDelivererMobile from '../../../components/HeaderDeliverer/HeaderDelivererMobile';
import OrdersDeliverersCard from '../../../components/OrdersDeliverersCard';

import { Container, Main, OrderCards } from './styles';

interface DeliveriesData {
  id: string;
  recipient: {
    name: string;
    city: string;
    state: string;
  };
  product: string;
  start_date: Date;
  status: 'pending' | 'withdrawal';
  formattedStartDate: string;
  formattedCity: string;
}

const CompleteOrders: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveriesData[]>([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get<DeliveriesData[]>(
        '/deliverers/completeDeliveries',
      );

      setDeliveries(
        response.data.map(delivery => {
          return {
            ...delivery,
            formattedStartDate: formatDate(delivery.start_date),
            formattedCity: `${delivery.recipient.city}-${delivery.recipient.state}`,
          };
        }),
      );
    }

    loadDeliveries();
  }, []);

  return (
    <>
      <HeaderDeliverer />
      <HeaderDelivererMobile />
      <Container>
        <Main>
          <OrderCards isEmpty={deliveries.length === 0 ? 'true' : 'false'}>
            {deliveries.length === 0 ? (
              <span>Você não possui nenhuma entrega finalizada</span>
            ) : (
              deliveries.map(delivery => (
                <OrdersDeliverersCard
                  key={delivery.id}
                  id={delivery.id}
                  formattedCity={delivery.formattedCity}
                  formattedStartDate={delivery.formattedStartDate}
                  product={delivery.product}
                  status={delivery.status}
                  linkPathToDetails="/complete/details/"
                />
              ))
            )}
          </OrderCards>
        </Main>
      </Container>
    </>
  );
};

export default CompleteOrders;
