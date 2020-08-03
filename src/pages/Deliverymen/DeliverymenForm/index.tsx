import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { FiChevronLeft, FiCheck, FiUser, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';

import api from '../../../services/api';

import getValidationErrors from '../../../utils/getValidationErrors';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Content, ContentHeader } from './styles';

interface DeliverymenFormData {
  name: string;
  email: string;
}

const DeliverymenForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DeliverymenFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Informe um nome'),
          email: Yup.string()
            .required('Informe um email')
            .email('Informe um e-mail valido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('deliverers', {
          name: data.name,
          email: data.email,
        });

        history.push('/deliverymen');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [history],
  );

  return (
    <>
      <Container>
        <Header />
        <ContentHeader>
          <h1>Cadastro de destinatário</h1>

          <div>
            <Link to="/deliverymen">
              <FiChevronLeft size={22} />
              Voltar
            </Link>
            <Button type="button" onClick={() => formRef.current?.submitForm()}>
              <FiCheck size={22} />
              Salvar
            </Button>
          </div>
        </ContentHeader>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Nome</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

            <h1>Email</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="example@rocketseat.com"
            />
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default DeliverymenForm;
