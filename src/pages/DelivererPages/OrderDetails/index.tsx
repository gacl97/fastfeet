import React, { useCallback, useEffect } from 'react';
import {
  FiTruck,
  FiUser,
  FiMap,
  FiPackage,
  FiCalendar,
  FiActivity,
  FiChevronLeft,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';
import { FaCalendarCheck, FaCalendarDay } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../../services/api';

import Header from '../../../components/HeaderDeliverer';

import {
  Container,
  Content,
  ContentHeader,
  Box,
  BoxContent,
  DateContent,
  DateView,
  ContentFooter,
} from './styles';

const OrderDetails: React.FC = () => {
  const history = useHistory();
  const { delivery_id } = useParams();

  const handleClickBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    async function loadOrder() {
      const response = await api.get(`deliverers/${delivery_id}`);

      console.log(response.data);
    }

    loadOrder();
  }, [delivery_id]);

  return (
    <>
      <Container>
        <Header />

        <ContentHeader>
          <button type="button" onClick={handleClickBackButton}>
            <FiChevronLeft />
            Voltar
          </button>
        </ContentHeader>

        <Content>
          <Box>
            <header>
              <span>
                <FiTruck />
                <h1>Informações da entrega</h1>
              </span>
            </header>

            <BoxContent>
              <h1>
                <FiUser />
                Destinatario
              </h1>
              <span>Gustavo Augusto Calazans Lopes</span>

              <h1>
                <FiMap />
                Endereço de entrega
              </h1>
              <span>
                Rua Dom Silverio, 103, Matriz, Congonhas-MG, 36410-110
              </span>

              <h1>
                <FiPackage />
                Produto
              </h1>
              <span>Yamaha-XRE</span>
            </BoxContent>
          </Box>
          <Box>
            <header>
              <span>
                <FiCalendar />
                <h1>Situação da entrega</h1>
              </span>
            </header>

            <BoxContent>
              <h1>
                <FiActivity />
                Status
              </h1>
              <span>Pendente</span>
            </BoxContent>

            <DateContent>
              <DateView>
                <h1>
                  <FaCalendarDay />
                  Data de retirada
                </h1>
                <span>14/10/2020</span>
              </DateView>

              <DateView>
                <h1>
                  <FaCalendarCheck />
                  Data de entrega
                </h1>
                <span>--/--/--</span>
              </DateView>
            </DateContent>
          </Box>
        </Content>
        <ContentFooter>
          <button type="button">
            <FiXCircle color="#E74040" />
            Informar Problema
          </button>
          <button type="button">
            <FiInfo color="#E7BA40" />
            Visualizar Problemas
          </button>
          <button type="button">
            <FiCheckCircle color="#55a630" />
            Confirmar Entrega
          </button>
        </ContentFooter>
      </Container>
    </>
  );
};

export default OrderDetails;
