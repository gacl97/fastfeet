import React, { useState, useCallback, ChangeEvent, useEffect } from 'react';

import HeaderDeliverer from '../../../components/HeaderDeliverer';
import HeaderDelivererMobile from '../../../components/HeaderDeliverer/HeaderDelivererMobile';

import api from '../../../services/api';
import { useAuth } from '../../../hooks/auth';

import { Container, Main, AvatarInput, CameraIcon, Content } from './styles';
import formatDate from '../../../utils/formatDate';

interface DelivererProfile {
  total_deliveries: string;
  total_deliveries_made: string;
  canceled_deliveries: string;
  deliveries_to_made: string;
  total_problem_deliveries: string;
  created_at: Date;
  formated_created_at: string;
}

const DelivererProfile: React.FC = () => {
  const [deliverer, setDeliverer] = useState<DelivererProfile>(
    {} as DelivererProfile,
  );

  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        await api
          .patch(`/deliverers/${user.id}/avatar`, data)
          .then(response => {
            updateUser(response.data);
          });
      }
    },
    [user.id, updateUser],
  );

  useEffect(() => {
    async function loadDeliverer() {
      const response = await api.get<DelivererProfile>(
        `/deliverers/${user.id}`,
      );

      setDeliverer({
        ...response.data,
        formated_created_at: formatDate(response.data.created_at),
      });
    }

    loadDeliverer();
  }, [user.id]);

  return (
    <>
      <HeaderDeliverer />
      <HeaderDelivererMobile />
      <Container>
        <Main>
          <h1>Meu perfil</h1>

          <AvatarInput>
            <img
              src={
                user.avatar_url ||
                `https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${user.name}`
              }
              alt={user.name}
            />

            <label htmlFor="avatar">
              <input type="file" id="avatar" onChange={handleAvatarChange} />
              <CameraIcon />
            </label>
          </AvatarInput>

          <Content>
            <h3>Nome:</h3>
            <span>{user.name}</span>
            <h3>Funcionario desde:</h3>
            <span>{deliverer.formated_created_at}</span>
            <h3>Entregas totais:</h3>
            <span>{deliverer.total_deliveries}</span>
            <h3>Entregas realizadas:</h3>
            <span>{deliverer.total_deliveries_made}</span>
            <h3>Entregas à fazer:</h3>
            <span>{deliverer.deliveries_to_made}</span>
            <h3>Entregas canceladas:</h3>
            <span>{deliverer.canceled_deliveries}</span>
            <h3>Entregas com problemas:</h3>
            <span>{deliverer.total_problem_deliveries}</span>
          </Content>
        </Main>
      </Container>
    </>
  );
};

export default DelivererProfile;
