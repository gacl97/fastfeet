import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch, FiPlus, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

import Header from '../../../components/Header';
import SearchInput from '../../../components/SearchInput';
import InfoRecipientModal from '../../../components/InfoRecipientModal';

import { useRecipient } from '../../../hooks/recipient';

import {
  Container,
  Content,
  Box,
  RecipientInfo,
  Separator,
  ContentHeader,
} from './styles';

interface RecipientInfo {
  id: string;
  formattedStreet: string;
  formattedCity: string;
  zipcode: string;
}

interface RecipientData {
  id: string;
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
  formattedStreet: string;
  formattedCity: string;
}

const Recipients: React.FC = () => {
  const [recipients, setRecipients] = useState<RecipientData[]>([]);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [recipientInfo, setRecipientInfo] = useState<RecipientInfo>(
    {} as RecipientInfo,
  );
  const { loadRecipient } = useRecipient();

  const toggleInfoRecipientModal = useCallback(() => {
    setOpenInfoModal(!openInfoModal);
  }, [openInfoModal]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get<RecipientData[]>('/recipients');

      const formmatedRecipient = response.data.map(recipient => {
        return {
          ...recipient,
          formattedCity: `${recipient.city} - ${recipient.state}`,
          formattedStreet: `${recipient.street}, ${recipient.number}`,
        };
      });
      setRecipients(formmatedRecipient);
    }

    loadRecipients();
  }, []);

  const handleAddRecipientInfo = useCallback((recipient: RecipientData) => {
    setRecipientInfo({
      id: recipient.id,
      formattedStreet: recipient.formattedStreet,
      formattedCity: recipient.formattedCity,
      zipcode: recipient.zipcode,
    });
  }, []);

  return (
    <>
      <Container>
        <Header />

        <ContentHeader>
          <h1>Gerenciando entregadores</h1>

          <div>
            <SearchInput type="text" placeholder="Buscar por entregadores" />

            <Link to="/recipients/create-recipient">
              <FiPlus size={22} color="#FFFFFF" />
              Cadastrar
            </Link>
          </div>
        </ContentHeader>

        <Content>
          {recipients.length === 0 ? (
            <span>Ainda nao possui nenhum cadastro</span>
          ) : (
            recipients.map(recipient => (
              <Box key={recipient.id}>
                <section>
                  <FiUser size={28} />
                  {recipient.name}
                </section>

                <RecipientInfo>
                  <span>
                    <strong>Id:</strong>
                    {recipient.id}
                  </span>

                  <span>
                    <strong>Endereço: </strong>
                  </span>

                  <span style={{ height: '40px', margin: '0' }}>
                    {recipient.formattedStreet}
                  </span>

                  <span>{recipient.formattedCity}</span>

                  <Separator />

                  <button
                    type="button"
                    onClick={() => {
                      loadRecipient(recipient);
                      handleAddRecipientInfo(recipient);
                      setOpenInfoModal(true);
                    }}
                  >
                    Detalhes
                  </button>
                </RecipientInfo>
              </Box>
            ))
          )}
        </Content>

        {openInfoModal && (
          <InfoRecipientModal
            setOpenModal={toggleInfoRecipientModal}
            recipient_info={recipientInfo}
          />
        )}
      </Container>
    </>
  );
};

export default Recipients;
