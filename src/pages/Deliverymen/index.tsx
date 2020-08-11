import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import InfoDeliverymenModal from '../../components/InfoDeliverymenModal';

import { useDeliverer } from '../../hooks/deliverer';

import {
  Container,
  Content,
  Box,
  DelivererInfo,
  Separator,
  ContentHeader,
} from './styles';

interface DeliverymenInfo {
  id: string;
}

interface DelivererData {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

const Deliverymen: React.FC = () => {
  const [deliverers, setDeliverers] = useState<DelivererData[]>([]);
  const [deliverymenInfo, setDeliverymenInfo] = useState<DeliverymenInfo>(
    {} as DeliverymenInfo,
  );
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const { loadDeliverer } = useDeliverer();

  const toggleInfoModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [openInfoModal]);

  useEffect(() => {
    async function loadDeliverers() {
      const response = await api.get('/deliverers');

      setDeliverers(response.data);
    }

    loadDeliverers();
  }, []);

  const handleSetDeliverymenInfo = useCallback((deliverymen: DelivererData) => {
    setDeliverymenInfo({
      id: deliverymen.id,
    });
  }, []);

  return (
    <>
      <Container>
        <Header />

        <ContentHeader>
          <h1>Gerenciando entregadores</h1>

          <div>
            <SearchInput
              icon={FiSearch}
              type="text"
              placeholder="Buscar por entregadores"
            />

            <Link to="deliverymen/create-deliverymen">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </div>
        </ContentHeader>

        <Content>
          {deliverers.length === 0 ? (
            <span>Ainda nao possui nenhum cadastro</span>
          ) : (
            deliverers.map(deliverer => (
              <Box key={deliverer.id}>
                <section>
                  <img
                    src={
                      deliverer.avatar_url ||
                      `https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${deliverer.name}`
                    }
                    alt={deliverer.name}
                  />
                  {deliverer.name}
                </section>

                <DelivererInfo>
                  <span>
                    <strong>Id:</strong>
                    {deliverer.id}
                  </span>

                  <span>
                    <strong>Email: </strong>
                    {deliverer.email}
                  </span>

                  <Separator />

                  <button
                    type="button"
                    onClick={() => {
                      handleSetDeliverymenInfo(deliverer);
                      loadDeliverer(deliverer);
                      setOpenInfoModal(true);
                    }}
                  >
                    Detalhes
                  </button>
                </DelivererInfo>
              </Box>
            ))
          )}
        </Content>

        {openInfoModal && (
          <InfoDeliverymenModal
            setOpenModal={toggleInfoModal}
            deliverymen_info={deliverymenInfo}
          />
        )}
      </Container>
    </>
  );
};

export default Deliverymen;
