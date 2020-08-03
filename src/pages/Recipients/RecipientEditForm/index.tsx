import React, { useCallback, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import { FiChevronLeft, FiCheck, FiUser, FiHome } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory, useParams } from 'react-router-dom';

import api from '../../../services/api';

import getValidationErrors from '../../../utils/getValidationErrors';

import Header from '../../../components/Header';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import {
  Container,
  Content,
  ContentHeader,
  Address1,
  Street,
  StreetNumber,
  StreetComplement,
  Address2,
  CityAddress,
  StateAddress,
  CepAddress,
} from './styles';

interface RecipientFormData {
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
}

const RecipientEditForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = useCallback(
    async (data: RecipientFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Informe um nome'),
          street: Yup.string().required('Informe uma rua'),
          number: Yup.string().required('Informe um numero'),
          complement: Yup.string().required('Informe um complemento'),
          city: Yup.string().required('Informe uma cidade'),
          state: Yup.string().required('Informe uma estado'),
          zipcode: Yup.string().required('Informe uma cep'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.put('/recipients', data);

        history.push('/recipients');
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
        <Content>
          <ContentHeader>
            <h1>Edição de destinatário</h1>

            <div>
              <Link to="/recipients">
                <FiChevronLeft size={22} />
                Voltar
              </Link>
              <Button onClick={() => formRef.current?.submitForm()}>
                <FiCheck size={22} />
                Salvar
              </Button>
            </div>
          </ContentHeader>
          <Form
            ref={formRef}
            // initialData={{ name: recipient.name }}
            onSubmit={handleSubmit}
          >
            <h1>Nome</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

            <Address1>
              <Street>
                <h1>Rua</h1>
                <Input
                  name="street"
                  icon={FiHome}
                  type="text"
                  placeholder="Rua Beethoven"
                />
              </Street>

              <StreetNumber>
                <h1>Número</h1>
                <Input name="number" type="text" placeholder="1729" />
              </StreetNumber>

              <StreetComplement>
                <h1>Complemento</h1>
                <Input
                  name="complement"
                  type="text"
                  placeholder="Complemento"
                />
              </StreetComplement>
            </Address1>

            <Address2>
              <CityAddress>
                <h1>Cidade</h1>
                <Input name="city" type="text" placeholder="Diadema" />
              </CityAddress>

              <StateAddress>
                <h1>Estado</h1>
                <Input name="state" type="text" placeholder="São Paulo" />
              </StateAddress>

              <CepAddress>
                <h1>CEP</h1>
                <Input name="zipcode" type="text" placeholder="09960-580" />
              </CepAddress>
            </Address2>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default RecipientEditForm;
