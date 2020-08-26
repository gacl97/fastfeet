import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

interface MenuProps {
  isOpened: boolean;
}

const HeaderAdminMobile: React.FC<MenuProps> = ({ isOpened }) => {
  return (
    <>
      <Container isOpen={isOpened ? 'visible' : 'hidden'}>
        <NavLink to="/orders">Encomendas</NavLink>
        <NavLink to="/deliverymen">Entregadores</NavLink>
        <NavLink to="/recipients">Destinatarios</NavLink>
        <NavLink to="/delivery/problems">Problemas</NavLink>
      </Container>
    </>
  );
};

export default HeaderAdminMobile;
