import React, { useEffect, useCallback, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

interface BallonProps {
  isOpened: boolean;
  setOpenBallonModal(state: boolean): void;
}

const BallonModal: React.FC<BallonProps> = ({
  isOpened,
  setOpenBallonModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { signOut } = useAuth();

  const handleClickOutside = useCallback(
    event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenBallonModal(false);
      }
    },
    [setOpenBallonModal],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <>
      <Container ref={modalRef} isOpen={isOpened ? 'visible' : 'hidden'}>
        <Link to="/profile">
          Meu Perfil <FaUser />
        </Link>
        <button type="button" onClick={signOut}>
          Sair da Plataforma <FiXCircle />
        </button>
      </Container>
    </>
  );
};

export default BallonModal;
