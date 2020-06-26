import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="FastFeet" />

          <form>
            <h1>Seu e-mail</h1>
            <Input name="email" icon={FiMail} placeholder="exemplo@email.com" />

            <h1>Senha</h1>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="********"
            />

            <Button type="submit">Entrar no sistema</Button>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
