import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const DeliveryProblems: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Problemas na entrega</h1>

          <table>
            <tr>
              <th>id</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>

            <tr>
              <td>#01</td>
              <td>
                Morador não estava em casa no momento da tentativa de entrega
              </td>

              <td>
                <button type="button">
                  <FiMoreHorizontal size={16} />
                </button>
              </td>
            </tr>
          </table>
        </Content>
      </Container>
    </>
  );
};

export default DeliveryProblems;
