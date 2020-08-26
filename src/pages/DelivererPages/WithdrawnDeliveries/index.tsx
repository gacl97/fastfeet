import React, { useEffect, useState } from 'react';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import HeaderDeliverer from '../../../components/HeaderDeliverer';
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

const WithdrawnDeliveries: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveriesData[]>([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get<DeliveriesData[]>('/deliverers/pending');

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
      <Container>
        <Main>
          <OrderCards>
            {deliveries.length === 0 ? (
              <span>Você ainda não fez nenhuma retirada</span>
            ) : (
              deliveries.map(delivery => (
                <OrdersDeliverersCard
                  key={delivery.id}
                  id={delivery.id}
                  formattedCity={delivery.formattedCity}
                  formattedStartDate={delivery.formattedStartDate}
                  product={delivery.product}
                  status={delivery.status}
                  linkPathToDetails="/pending/details/"
                />
              ))
            )}
          </OrderCards>
        </Main>
      </Container>
    </>
  );
};

export default WithdrawnDeliveries;
