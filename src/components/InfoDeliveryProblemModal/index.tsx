import React from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, Box, ContainerHeader, Content } from './styles';

interface ModalProps {
  setCloseModal(): void;
  description: string;
}

const InfoDeliveryProblemModal: React.FC<ModalProps> = ({
  setCloseModal,
  description,
}) => {
  return (
    <>
      <Container>
        <Box>
          <ContainerHeader>
            <h1>Visualizar problema</h1>
            <button type="button" onClick={setCloseModal}>
              <FiXCircle size={16} />
            </button>
          </ContainerHeader>

          <Content>
            <span>{description}</span>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default InfoDeliveryProblemModal;
