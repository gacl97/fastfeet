import React from 'react';
import { FiChevronLeft, FiCheck, FiUser, FiHome } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Buttom from '../../components/Button';
import Input from '../../components/Input';

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

const RecipientForm: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <ContentHeader>
            <h1>Cadastro de destinatário</h1>

            <div>
              <Link to="/deliverymen">
                <FiChevronLeft size={22} />
                Voltar
              </Link>
              <Buttom type="submit">
                <FiCheck size={22} />
                Salvar
              </Buttom>
            </div>
          </ContentHeader>
          <Form onSubmit={() => {}}>
            <h1>Nome</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />

            <Address1>
              <Street>
                <h1>Rua</h1>
                <Input
                  name="name"
                  icon={FiHome}
                  type="text"
                  placeholder="Rua Beethoven"
                />
              </Street>

              <StreetNumber>
                <h1>Número</h1>
                <Input name="name" type="text" placeholder="1729" />
              </StreetNumber>

              <StreetComplement>
                <h1>Complemento</h1>
                <Input name="name" type="text" placeholder="Complemento" />
              </StreetComplement>
            </Address1>

            <Address2>
              <CityAddress>
                <h1>Cidade</h1>
                <Input name="name" type="text" placeholder="Diadema" />
              </CityAddress>

              <StateAddress>
                <h1>Estado</h1>
                <Input name="name" type="text" placeholder="São Paulo" />
              </StateAddress>

              <CepAddress>
                <h1>CEP</h1>
                <Input name="name" type="text" placeholder="09960-580" />
              </CepAddress>
            </Address2>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default RecipientForm;
