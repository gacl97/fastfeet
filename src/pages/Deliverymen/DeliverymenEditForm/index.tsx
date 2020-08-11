import React, { useCallback, useRef, ChangeEvent } from 'react';
import * as Yup from 'yup';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  FiChevronLeft,
  FiCheck,
  FiUser,
  FiMail,
  FiCamera,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';

import getValidationErrors from '../../../utils/getValidationErrors';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { useDeliverer } from '../../../hooks/deliverer';

import { Container, AvatarInput, Content, ContentHeader } from './styles';

interface DeliverymenFormData {
  name: string;
  email: string;
}

const DeliverymenForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams();
  const { deliverer } = useDeliverer();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch(`/deliverers/${id}/avatar`, data).then();
        history.push('/deliverymen');
      }
    },
    [id, history],
  );

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

        await api.put(`/deliverers/${id}`, data);

        history.push('/deliverymen');
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [id, history],
  );

  return (
    <>
      <Container>
        <Header />
        <ContentHeader>
          <h1>Edição de destinatário</h1>

          <div>
            <Link to="/deliverymen">
              <FiChevronLeft size={22} />
              Voltar
            </Link>
            <Button onClick={() => formRef.current?.submitForm()}>
              <FiCheck size={22} />
              Salvar
            </Button>
          </div>
        </ContentHeader>

        <Content>
          <AvatarInput>
            <img
              src={
                deliverer.avatar_url ||
                `https://avatar.oxro.io/avatar.svg?name=${deliverer.name}?height=186`
              }
              alt={deliverer.name}
            />

            <label htmlFor="avatar">
              <input type="file" id="avatar" onChange={handleAvatarChange} />
              <FiCamera />
            </label>
          </AvatarInput>

          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            initialData={{
              name: deliverer.name,
              email: deliverer.email,
            }}
          >
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
