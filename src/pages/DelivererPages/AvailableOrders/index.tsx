import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiTruck, FiCircle } from 'react-icons/fi';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import HeaderDeliverer from '../../../components/HeaderDeliverer';

import {
  Container,
  Content,
  Box,
  DeliveryInfo,
  BoxContent,
  BoxFooter,
  LineStatus,
  LineStatusCircle,
} from './styles';

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

const AvailableOrders: React.FC = () => {
  const [deliveries, setDeliveries] = useState<DeliveriesData[]>([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get<DeliveriesData[]>(
        '/deliverers/deliveries',
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
      <Container>
        <HeaderDeliverer />
        <Content>
          {deliveries.length === 0 ? (
            <span>Você não possui nenhuma entrega pendente</span>
          ) : (
            deliveries.map(delivery => (
              <Box key={delivery.id}>
                <header>
                  <span>
                    <FiTruck />
                    <h1>{delivery.formattedCity}</h1>
                  </span>
                </header>
                <DeliveryInfo>
                  <span>
                    <strong>id: </strong>
                    {delivery.id}
                  </span>
                  <span>
                    <strong>Produto: </strong>
                    {delivery.product}
                  </span>
                </DeliveryInfo>

                <BoxContent>
                  <LineStatus>
                    <LineStatusCircle>
                      <FiCircle
                        color={
                          delivery.status === 'pending' ? '#e6af2e' : '#fff'
                        }
                        style={{
                          background:
                            delivery.status === 'pending' ? '#e6af2e' : '#fff',
                        }}
                      />
                      <span>Aguardando retirada</span>
                    </LineStatusCircle>

                    <LineStatusCircle>
                      <FiCircle
                        color={
                          delivery.status === 'pending' ? '#fff' : '#e6af2e'
                        }
                        style={{
                          background:
                            delivery.status === 'pending' ? '#fff' : '#e6af2e',
                        }}
                      />
                      <span>Retirada</span>
                    </LineStatusCircle>

                    <LineStatusCircle>
                      <FiCircle
                        color={
                          delivery.status === 'pending' ? '#fff' : '#e6af2e'
                        }
                        style={{
                          background:
                            delivery.status === 'pending' ? '#fff' : '#e6af2e',
                        }}
                      />
                      <span>Entregue</span>
                    </LineStatusCircle>
                  </LineStatus>
                </BoxContent>

                <BoxFooter>
                  <section>
                    <h1>Data da retirada</h1>
                    <span id="date">{delivery.formattedStartDate}</span>
                  </section>

                  <Link to={`/details/${delivery.id}`}>ver detalhes</Link>
                </BoxFooter>
              </Box>
            ))
          )}
        </Content>
      </Container>
    </>
  );
};

export default AvailableOrders;
