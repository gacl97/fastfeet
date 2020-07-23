import React, { useEffect, useState } from 'react';
import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { Container, Content } from './styles';

interface RecipientData {
  id: string;
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
  formattedAddress: string;
}

const Recipients: React.FC = () => {
  const [recipients, setRecipients] = useState<RecipientData[]>([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get<RecipientData[]>('/recipients');

      setRecipients(
        response.data.map(recipient => {
          return {
            ...recipient,
            formattedAddress: `${recipient.street}, ${recipient.number}, ${recipient.city}-${recipient.state}`,
          };
        }),
      );
    }

    loadRecipients();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Cadastro de destinatário</h1>

          <Form onSubmit={() => {}}>
            <Input
              name="search-recipients"
              icon={FiSearch}
              type="text"
              placeholder="Buscar por destinatários"
            />

            <Link to="/recipients/create-recipient">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </Form>

          {recipients.length === 0 ? (
            <span>Ainda não possui nenhum destinatário cadastrado</span>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {recipients &&
                  recipients.map(recipient => (
                    <tr key={recipient.id}>
                      <td>{recipient.id}</td>
                      <td>{recipient.name}</td>
                      <td>{recipient.formattedAddress}</td>

                      <td>
                        <button type="button">
                          <FiMoreHorizontal size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Recipients;
