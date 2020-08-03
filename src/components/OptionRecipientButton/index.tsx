import React, { useState, useCallback, ButtonHTMLAttributes } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { FiMoreHorizontal, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import OptionsModal from '../OptionsModal';
import CustomConfirmAlert from '../CustomConfirmAlert';

import { ContainerButton } from './styles';

interface OptionRecipientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  recipient: Recipient;
}

interface Recipient {
  id: string;
  name: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
}

const OptionRecipientButton: React.FC<OptionRecipientButtonProps> = ({
  recipient,
}) => {
  const [openOptionsModal, setOpenOptionsModal] = useState(false);
  const history = useHistory();

  const toggleOptionsModal = useCallback(() => {
    setOpenOptionsModal(!openOptionsModal);
  }, [setOpenOptionsModal, openOptionsModal]);

  const handleDeleteRecipient = useCallback(
    async (gonnaDelete: boolean) => {
      toggleOptionsModal();
      if (!gonnaDelete) {
        return;
      }

      await api.delete(`/recipients/${recipient.id}`);
      history.push('/');
    },
    [recipient, toggleOptionsModal, history],
  );

  const DeleteConfirm = useCallback(() => {
    const message = `Tem certeza que deseja excluir o destinatário: ${recipient.id} ?`;

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <CustomConfirmAlert
            title="Excluir Destinatário"
            message={message}
            handleDelete={handleDeleteRecipient}
            onClose={onClose}
          />
        );
      },
    });
  }, [recipient, handleDeleteRecipient]);

  const handleButtonClick = useCallback(() => {
    // setRecipient(recipient);
    toggleOptionsModal();
  }, [toggleOptionsModal]);

  return (
    <>
      <ContainerButton type="button" onClick={handleButtonClick}>
        <FiMoreHorizontal size={16} />
      </ContainerButton>
      {openOptionsModal && (
        <OptionsModal>
          <Link to={`/recipients/edit-recipient/${recipient.id}`}>
            <FiEdit2 color="#4D85EE" /> Editar
          </Link>
          <button type="button" onClick={DeleteConfirm}>
            <FiTrash2 color="#DE3B3B" /> Excluir
          </button>
        </OptionsModal>
      )}
    </>
  );
};

export default OptionRecipientButton;
