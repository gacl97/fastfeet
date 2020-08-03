import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import OptionDeliveryProblemButton from '../../components/OptionDeliveryProblemButton';

import { Container, Content } from './styles';

interface DeliveryProblems {
  id: string;
  description: string;
}

const DeliveryProblems: React.FC = () => {
  const [deliveryProblems, setDeliveryProblems] = useState<DeliveryProblems[]>(
    [],
  );

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery/problems');

      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Content>
          <h1>Problemas na entrega</h1>

          {deliveryProblems.length === 0 ? (
            <span>Ainda não possui nenhuma entrega com problemas</span>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Problema</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {deliveryProblems &&
                  deliveryProblems.map(deliveryProblem => (
                    <tr key={deliveryProblem.id}>
                      <td>{deliveryProblem.id}</td>
                      <td>{deliveryProblem.description}</td>

                      <td>
                        <OptionDeliveryProblemButton
                          deliveryProblemId={deliveryProblem.id}
                          description={deliveryProblem.description}
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

export default DeliveryProblems;
