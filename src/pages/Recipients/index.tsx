import React, { useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { RecipientProvider } from '../../hooks/recipient';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import OptionRecipientButton from '../../components/OptionRecipientButton';

import { Container, Content, ContentHeader } from './styles';

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

      const formmatedRecipient = response.data.map(recipient => {
        return {
          ...recipient,
          formattedAddress: `${recipient.street}, ${recipient.number}, ${recipient.city}-${recipient.state}`,
        };
      });
      setRecipients(formmatedRecipient);
    }

    loadRecipients();
  }, []);

  return (
    <>
      <RecipientProvider>
        <Container>
          <Header />
          <Content>
            <h1>Gerenciando destinatários</h1>

            <ContentHeader>
              <SearchInput
                type="text"
                icon={FiSearch}
                placeholder="Buscar por destinatários"
              />

              <Link to="/recipients/create-recipient">
                <FiPlus size={22} color="#FFFFFF" />
                Cadastrar
              </Link>
            </ContentHeader>

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
                          <OptionRecipientButton recipient={recipient} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </Content>
        </Container>
      </RecipientProvider>
    </>
  );
};

export default Recipients;
