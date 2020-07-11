import React from 'react';
import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content } from './styles';

const Recipients: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Cadastro de destinatário</h1>

          <Form onSubmit={() => {}}>
            <Input
              name="search-recipients"
              icon={FiSearch}
              type="text"
              placeholder="Buscar por destinatários"
            />

            <Link to="/recipients/create-recipient">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </Form>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#01</td>
                <td>Gustavo Augusto</td>
                <td>Rua Dom Silvério, Matriz, 103, Congonhas-MG</td>

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

export default Recipients;
