import React, { useState, useCallback } from 'react';
import { NavLink, Link } from 'react-router-dom';

import BallonModal from '../../BalloonModal';
import HeaderNavBarModal from '../../HeaderNavBarModal';

import { useAuth } from '../../../hooks/auth';

import logoImg from '../../../assets/logo.svg';

import { Container, Main, MenuIcon, DelivererInfo } from './styles';

const HeaderDelivererMobile: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBallonModal, setOpenBallonModal] = useState(false);
  const { user } = useAuth();

  const toggleBallonModal = useCallback(() => {
    setOpenBallonModal(!openBallonModal);
  }, [openBallonModal]);

  const toggleMenuModal = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  return (
    <>
      <Container>
        <Main>
          <button
            className="menu-button"
            type="button"
            onClick={toggleMenuModal}
          >
            <MenuIcon />
          </button>

          <Link to="availableOrders">
            <img src={logoImg} alt="FastFeet" />
          </Link>

          <DelivererInfo onClick={toggleBallonModal}>
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

          <HeaderNavBarModal isOpened={openMenu} setOpenModal={setOpenMenu}>
            <NavLink to="/availableOrders">Encomendas pendentes</NavLink>
            <NavLink to="/withdrawnDeliveries">Encomendas retiradas</NavLink>
            <NavLink to="/completeDeliveries">Entregas finalizadas</NavLink>
          </HeaderNavBarModal>
        </Main>
      </Container>
    </>
  );
};

export default HeaderDelivererMobile;
