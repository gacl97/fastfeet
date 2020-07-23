import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FiChevronLeft, FiCheck } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link, useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

import {
  Container,
  Content,
  ContentHeader,
  SelectOptions,
  SelectContainer,
  InputContainer,
} from './styles';

interface RecipientFormatted {
  value: string;
  label: string;
}

interface DelivererFormatted {
  value: string;
  label: string;
}

interface Recipient {
  id: string;
  name: string;
}

interface Deliverer {
  id: string;
  name: string;
}

interface OrderFormData {
  deliveryman_id: string;
  recipient_id: string;
  product: string;
}

const OrdersEditForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [recipients, setRecipients] = useState<RecipientFormatted[]>([]);
  const [deliverers, setDeliverers] = useState<DelivererFormatted[]>([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get<Recipient[]>('/recipients');

      const dataFormatted = response.data.map(recipient => {
        return {
          value: recipient.id,
          label: recipient.name,
        };
      });

      setRecipients(dataFormatted);
    }

    loadRecipients();
  }, []);

  useEffect(() => {
    async function loadDeliverers() {
      const response = await api.get<Deliverer[]>('/deliverers');

      const dataFormatted = response.data.map(deliverer => {
        return {
          value: deliverer.id,
          label: deliverer.name,
        };
      });

      setDeliverers(dataFormatted);
    }

    loadDeliverers();
  }, []);

  const handleSubmit = useCallback(
    async (data: OrderFormData) => {
      await api.put(`/deliveries/${id}`, data);

      history.push('/orders');
    },
    [history, id],
  );

  return (
    <>
      <Container>
        <Header />
        <Content>
          <ContentHeader>
            <h1>Edição de encomendas</h1>

            <div>
              <Link to="/orders">
                <FiChevronLeft size={22} />
                Voltar
              </Link>
              <Button onClick={() => formRef.current?.submitForm()}>
                <FiCheck size={22} />
                Salvar
              </Button>
            </div>
          </ContentHeader>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <SelectOptions>
              <SelectContainer>
                <h1>Destinatário</h1>
                <Select
                  name="recipient_id"
                  options={recipients}
                  placeholder="Destinatário"
                />
              </SelectContainer>

              <SelectContainer>
                <h1>Entregador</h1>
                <Select
                  name="deliveryman_id"
                  options={deliverers}
                  placeholder="Entregador"
                />
              </SelectContainer>
            </SelectOptions>

            <InputContainer>
              <h1>Nome do produto</h1>
              <Input name="product" placeholder="Yamaha SX7" />
            </InputContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default OrdersEditForm;
