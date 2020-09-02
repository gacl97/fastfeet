import React, { useCallback, useState, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../../services/api';

import HeaderDeliverer from '../../../components/HeaderDeliverer';
import HeaderDelivererMobile from '../../../components/HeaderDeliverer/HeaderDelivererMobile';

import confirmLogoImg from '../../../assets/confirm-delivery.jpg';

import {
  Container,
  Main,
  ContainerHeader,
  ContentMiddle,
  BackIcon,
  SendIcon,
} from './styles';

const ConfirmOrderForm: React.FC = () => {
  const [signatureToUpload, setSignatureToUpload] = useState<File>();
  const [isMissingSignature, setIsMissingSignature] = useState(false);

  const history = useHistory();
  const { delivery_id } = useParams();

  const handleClickBackButton = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setIsMissingSignature(false);
        setSignatureToUpload(e.target.files[0]);
      }
    },
    [],
  );

  const handleSubmit = useCallback(async () => {
    try {
      if (!signatureToUpload) {
        throw new Error();
      }

      const data = new FormData();

      data.append('signature', signatureToUpload);

      await api.patch(`/deliveries/${delivery_id}/signature`, data);

      await api.put(`/deliverers/completeDeliveries/${delivery_id}`);

      history.push('/withdrawnDeliveries');
    } catch (err) {
      setIsMissingSignature(true);
      // Adicionar toast para informar sobre obrigatoriedade
    }
  }, [delivery_id, history, signatureToUpload]);

  return (
    <>
      <HeaderDeliverer />
      <HeaderDelivererMobile />

      <Container>
        <Main>
          <ContainerHeader>
            <button type="button" onClick={handleClickBackButton}>
              <BackIcon />
              Voltar
            </button>
          </ContainerHeader>

          <ContentMiddle isErrored={isMissingSignature}>
            <label htmlFor="avatar">
              <img src={confirmLogoImg} alt="Confirmar pedido" />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
              <span>Fazer upload da assinatura</span>
            </label>
          </ContentMiddle>

          <button type="button" onClick={handleSubmit}>
            Confirmar entrega
            <SendIcon />
          </button>
        </Main>
      </Container>
    </>
  );
};

export default ConfirmOrderForm;
