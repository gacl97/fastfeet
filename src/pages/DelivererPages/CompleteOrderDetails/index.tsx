import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';
import formatStatus from '../../../utils/formatStatus';

import HeaderDeliverer from '../../../components/HeaderDeliverer';

import {
  Container,
  ContainerHeader,
  BackIcon,
  Main,
  MainCards,
  Card,
  TruckIcon,
  Content,
  UserIcon,
  MapIcon,
  PackageIcon,
  CalendarIcon,
  ActivityIcon,
  CalendarCheckIcon,
  CalendarDayIcon,
  DateContent,
  DateView,
  ContainerFooter,
  CircleIcon,
  InfoIcon,
} from './styles';

interface OrderStatus {
  recipient: {
    name: string;
    street: string;
    number: string;
    city: string;
    state: string;
    zipcode: string;
  };
  recipient_name: string;
  start_date: Date | undefined;
  end_date: Date | undefined;
  formattedStartDate: string;
  formattedEndDate: string;
  product: string;
  status: 'delivered' | 'pending' | 'withdrawal' | 'canceled';
  formattedAddress: string;
  formattedStatus: string;
}

const CompleteOrderDetails: React.FC = () => {
  const [order, setOrder] = useState<OrderStatus>({} as OrderStatus);
  const history = useHistory();
  const { delivery_id } = useParams();

  const handleClickBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get<OrderStatus>(
        `deliverers/delivery/${delivery_id}`,
      );

      const order_formatted = {
        ...response.data,
        recipient_name: response.data.recipient.name,
        formattedStartDate: formatDate(response.data.start_date),
        formattedEndDate: formatDate(response.data.end_date),
        formattedAddress: `${response.data.recipient.street}, ${response.data.recipient.number}, ${response.data.recipient.city}, ${response.data.recipient.state}, ${response.data.recipient.zipcode}`,
        formattedStatus: formatStatus({ status: response.data.status }),
      };

      setOrder(order_formatted);
    }

    loadOrder();
  }, [delivery_id]);

  return (
    <>
      <HeaderDeliverer />

      <Container>
        <Main>
          <ContainerHeader>
            <button type="button" onClick={handleClickBackButton}>
              <BackIcon />
              Voltar
            </button>
          </ContainerHeader>
          <MainCards>
            <Card>
              <header>
                <TruckIcon />
                <h1>Informações da entrega</h1>
              </header>

              <Content>
                <h1>
                  <PackageIcon />
                  Produto
                </h1>
                <span>{order.product}</span>

                <h1>
                  <UserIcon />
                  Destinatario
                </h1>
                <span>{order.recipient_name}</span>

                <h1>
                  <MapIcon />
                  Endereço de entrega
                </h1>
                <span>{order.formattedAddress}</span>
              </Content>
            </Card>

            <Card>
              <header>
                <CalendarIcon />
                <h1>Situação da entrega</h1>
              </header>
              <Content>
                <h1>
                  <ActivityIcon />
                  Status
                </h1>
                <span>{order.formattedStatus}</span>

                <DateContent>
                  <DateView>
                    <h1>
                      <CalendarDayIcon />
                      Data de retirada
                    </h1>
                    <span>{order.formattedStartDate}</span>
                  </DateView>

                  <DateView>
                    <h1>
                      <CalendarCheckIcon />
                      Data de entrega
                    </h1>
                    <span>{order.formattedEndDate}</span>
                  </DateView>
                </DateContent>
              </Content>
            </Card>
          </MainCards>
          <ContainerFooter>
            <button type="button">
              <CircleIcon color="#E74040" />
              Informar Problema
            </button>
            <button type="button">
              <InfoIcon color="#E7BA40" />
              Visualizar Problemas
            </button>
          </ContainerFooter>
        </Main>
      </Container>
    </>
  );
};

export default CompleteOrderDetails;
