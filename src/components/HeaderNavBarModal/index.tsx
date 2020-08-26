import React, { useRef, useCallback, useEffect } from 'react';

import { Container } from './styles';

interface MenuProps {
  isOpened: boolean;
  setOpenModal(state: boolean): void;
}

const HeaderNavBarModal: React.FC<MenuProps> = ({
  children,
  isOpened,
  setOpenModal,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    },
    [setOpenModal],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <Container ref={modalRef} isOpen={isOpened ? 'visible' : 'hidden'}>
      {children}
    </Container>
  );
};

export default HeaderNavBarModal;
