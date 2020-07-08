import React from 'react';
import { FiSearch, FiPlus, FiMoreHorizontal, FiCircle } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content, Status } from './styles';

const Orders: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando encomendas</h1>

          <Form onSubmit={() => {}}>
            <Input
              name="search-orders"
              icon={FiSearch}
              type="text"
              placeholder="Buscar por encomendas"
            />

            <Link to="/">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </Form>

          <table>
            <tr>
              <th>id</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>

            <tr>
              <td>#01</td>
              <td>Fernando Vasconcelos</td>

              <td>
                <section>
                  <img
                    src="https://avatars2.githubusercontent.com/u/43053386?s=460&v=4"
                    alt="avatar"
                  />
                  <span>Gustavo Augusto</span>
                </section>
              </td>

              <td>Congonhas</td>
              <td>Minas Gerais</td>
              <td>
                <Status type="delivered">
                  <FiCircle />
                  <span>Entregue</span>
                </Status>
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

export default Orders;
