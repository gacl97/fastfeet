import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container, Content, ButtonTypes } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [adminButton, setAdminButton] = useState(true);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const role = adminButton ? 'admin' : 'deliverer';

        signIn({
          email: data.email,
          password: data.password,
          role,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn, adminButton],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="FastFeet" />

          <ButtonTypes adminIsSelected={adminButton}>
            <button type="button" onClick={() => setAdminButton(true)}>
              Admin
            </button>
            <button type="button" onClick={() => setAdminButton(false)}>
              Entregador
            </button>
          </ButtonTypes>

          <Form ref={formRef} onSubmit={handleSubmit}>
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
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
