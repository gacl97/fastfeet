import React from 'react';

import { Container, Buttons } from './styles';

interface CustomConfirmAlertProps {
  title: string;
  message: string;
  handleDelete(gonnaDelete: boolean): void;
  onClose(): void;
}

const CustomConfirmAlert: React.FC<CustomConfirmAlertProps> = ({
  title,
  message,
  handleDelete,
  onClose,
}) => {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <p>{message}</p>

        <Buttons>
          <button
            type="button"
            onClick={() => {
              handleDelete(true);
              onClose();
            }}
          >
            Excluir
          </button>
          <button
            type="button"
            onClick={() => {
              handleDelete(false);
              onClose();
            }}
          >
            Cancelar
          </button>
        </Buttons>
      </Container>
    </>
  );
};

export default CustomConfirmAlert;
