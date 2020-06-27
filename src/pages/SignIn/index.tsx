import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

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
