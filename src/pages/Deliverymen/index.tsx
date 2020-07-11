import React from 'react';
import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const Deliverymen: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando entregadores</h1>

          <Form onSubmit={() => {}}>
            <Input
              name="search-deliverymen"
              icon={FiSearch}
              type="text"
              placeholder="Buscar por entregadores"
            />

            <Link to="deliverymen/create-deliverymen">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </Form>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Foto</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#01</td>

                <td>
                  <img
                    src="https://avatars2.githubusercontent.com/u/43053386?s=460&v=4"
                    alt="avatar"
                  />
                </td>

                <td>Gustavo Augusto</td>
                <td>gustavolopes26@gmail.com</td>

                <td>
                  <button type="button">
                    <FiMoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Content>
      </Container>
    </>
  );
};

export default Deliverymen;
