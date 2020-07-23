import React, { useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';

import signature from '../../assets/signature.svg';

import {
  Container,
  Box,
  Header,
  HeaderContent,
  Separator,
  Dates,
  Signature,
} from './styles';

interface ModalProps {
  setOpenModal(): void;
  street: string;
  city: string;
  zipcode: string;
  withdrawalDate: string;
  deliveryDate: string;
}

const InfoOrderModal: React.FC<ModalProps> = ({
  setOpenModal,
  street,
  city,
  zipcode,
  withdrawalDate,
  deliveryDate,
}) => {
  const closeModal = useCallback(() => {
    setOpenModal();
  }, [setOpenModal]);

  return (
    <>
      <Container>
        <Box>
          <Header>
            <h1>Informações da encomenda</h1>
            <button type="button" onClick={closeModal}>
              <FiXCircle />
            </button>
          </Header>

          <HeaderContent>
            <span>{street}</span>
            <span>{city}</span>
            <span>{zipcode}</span>
          </HeaderContent>

          <Separator />

          <Dates>
            <h1>Datas</h1>
            <span>
              <strong>Retirada: </strong> {withdrawalDate}
            </span>
            <span>
              <strong>Entrega: </strong> {deliveryDate}
            </span>
          </Dates>

          <Separator />

          <Signature>
            <h1>Assinatura do destinatário</h1>

            <img src={signature} alt="signature" />
          </Signature>
        </Box>
      </Container>
    </>
  );
};

export default InfoOrderModal;
