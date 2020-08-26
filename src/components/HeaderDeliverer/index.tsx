import React, { useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import BallonModal from '../BalloonModal';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Menu, DelivererInfo } from './styles';

const HeaderDeliverer: React.FC = () => {
  const { user } = useAuth();

  const [openBallonModal, setOpenBallonModal] = useState(false);

  const toggleBallonModal = useCallback(() => {
    setOpenBallonModal(!openBallonModal);
  }, [openBallonModal]);

  return (
    <>
      <Container>
        <Content>
          <Menu>
            <Link to="availableOrders">
              <img src={logoImg} alt="FastFeet" />
            </Link>

            <NavLink to="/availableOrders">Encomendas pendentes</NavLink>
            <NavLink to="/withdrawnDeliveries">Encomendas retiradas</NavLink>
            <NavLink to="/completeDeliveries">Entregas finalizadas</NavLink>
          </Menu>

          <DelivererInfo onClick={toggleBallonModal}>
            <span>Gustavo Augusto</span>
            <img
              src={
                user.avatar_url ||
                `https://ui-avatars.com/api/?size=128&background=5B4699&color=fff&name=${user.name}`
              }
              alt={user.name}
            />
            <BallonModal
              isOpened={openBallonModal}
              setOpenBallonModal={setOpenBallonModal}
            />
          </DelivererInfo>
        </Content>
      </Container>
    </>
  );
};

export default HeaderDeliverer;
