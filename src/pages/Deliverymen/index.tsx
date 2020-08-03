import React, { useState, useEffect } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import OptionDeliverymenModal from '../../components/OptionDeliverymenModal';

import { Container, Content, ContentHeader } from './styles';

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

          <ContentHeader>
            <SearchInput
              icon={FiSearch}
              type="text"
              placeholder="Buscar por entregadores"
            />

            <Link to="deliverymen/create-deliverymen">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </ContentHeader>

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
                        <img
                          src={
                            deliverer.avatar_url ||
                            `https://api.adorable.io/avatars/${deliverer.name}`
                          }
                          alt={deliverer.name}
                        />
                      </td>

                      <td>{deliverer.name}</td>
                      <td>{deliverer.email}</td>

                      <td>
                        <button type="button">
                          <OptionDeliverymenModal
                            deliverymenId={deliverer.id}
                          />
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
