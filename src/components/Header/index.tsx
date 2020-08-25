import React, { useState, useCallback } from 'react';
import { FiPower, FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import MenuResponsive from './MenuResponsive';

import {
  Container,
  HeaderContent,
  LogoImg,
  HeaderContainer,
  Menu,
} from './styles';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { signOut } = useAuth();

  const toggleMenu = useCallback(() => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  }, [openMenu]);

  return (
    <Container>
      <HeaderContainer>
        <button className="menu-button" type="button" onClick={toggleMenu}>
          <FiMenu size={22} />
        </button>
        <MenuResponsive isOpened={openMenu} />

        <HeaderContent>
          <LogoImg src={logoImg} alt="FastFeet" />

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

        <button className="sign-out-button" type="button" onClick={signOut}>
          <FiPower size={22} />
        </button>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
