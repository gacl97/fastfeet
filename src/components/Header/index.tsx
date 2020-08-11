import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, HeaderContent, HeaderContainer, Menu } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="FastFeet" />

          <Menu>
            <NavLink to="/orders">Encomendas</NavLink>
            <NavLink to="/deliverymen">Entregadores</NavLink>
            <NavLink to="/recipients">Destinatarios</NavLink>
            <NavLink to="/delivery/problems">Problemas</NavLink>
          </Menu>
        </HeaderContent>

        <div>
          <span>Admin FastFeet</span>
          <button type="button" onClick={signOut}>
            Sair do sistema
          </button>
        </div>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
