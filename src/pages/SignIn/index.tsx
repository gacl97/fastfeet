import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import { Container, Content } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="FastFeet" />

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
