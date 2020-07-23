import React, { useState, useEffect } from 'react';
import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content } from './styles';

interface DelivererData {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

const Deliverymen: React.FC = () => {
  const [deliverers, setDeliverers] = useState<DelivererData[]>([]);

  useEffect(() => {
    async function loadDeliverers() {
      const response = await api.get('/deliverers');

      setDeliverers(response.data);
    }

    loadDeliverers();
  }, []);
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

          {deliverers.length === 0 ? (
            <span>Ainda não possui nenhum entregador cadastrado</span>
          ) : (
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
                {deliverers &&
                  deliverers.map(deliverer => (
                    <tr key={deliverer.id}>
                      <td>{deliverer.id}</td>

                      <td>
                        {deliverer.avatar_url ? (
                          <img
                            src={deliverer.avatar_url}
                            alt={deliverer.name}
                          />
                        ) : (
                          <img
                            src="https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png"
                            alt="avatar"
                          />
                        )}
                      </td>

                      <td>{deliverer.name}</td>
                      <td>{deliverer.email}</td>

                      <td>
                        <button type="button">
                          <FiMoreHorizontal size={16} />
                        </button>
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

export default Deliverymen;
