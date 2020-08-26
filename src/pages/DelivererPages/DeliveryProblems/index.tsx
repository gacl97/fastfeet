import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import HeaderDeliverer from '../../../components/HeaderDeliverer';
import HeaderDelivererMobile from '../../../components/HeaderDeliverer/HeaderDelivererMobile';
import DeliveryProblemCardDeliverer from '../../../components/DeliveryProblemCardDeliverer';

import {
  Container,
  ContainerHeader,
  BackIcon,
  Main,
  OrderCards,
} from './styles';

interface DeliveryProblem {
  id: string;
  description: string;
  created_at: Date;
  formatted_created_at: string;
}

const DeliveryProblems: React.FC = () => {
  const [deliveryProblem, setDeliveryProblem] = useState<DeliveryProblem[]>([]);
  const { delivery_id } = useParams();
  const history = useHistory();

  const handleClickBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get<DeliveryProblem[]>(
        `/delivery/${delivery_id}/problems`,
      );

      setDeliveryProblem(
        response.data.map(delivery => {
          return {
            ...delivery,
            formatted_created_at: formatDate(delivery.created_at),
          };
        }),
      );
    }

    loadDeliveries();
  }, [delivery_id]);

  return (
    <>
      <HeaderDeliverer />
      <HeaderDelivererMobile />

      <Container>
        <Main>
          <ContainerHeader>
            <button type="button" onClick={handleClickBackButton}>
              <BackIcon />
              Voltar
            </button>
          </ContainerHeader>

          <OrderCards isEmpty={deliveryProblem.length === 0 ? 'true' : 'false'}>
            {deliveryProblem.length === 0 ? (
              <span>Essa entrega não possui problemas cadastrados</span>
            ) : (
              deliveryProblem.map(delivery => (
                <DeliveryProblemCardDeliverer
                  key={delivery.id}
                  id={delivery.id}
                  description={delivery.description}
                  created_at={delivery.formatted_created_at}
                />
              ))
            )}
          </OrderCards>
        </Main>
      </Container>
    </>
  );
};

export default DeliveryProblems;
