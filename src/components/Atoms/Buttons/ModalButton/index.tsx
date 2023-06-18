import React from 'react';

import { Container } from './styles';

interface Props {
  cancelButton?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const ModalButton: React.FC<Props> = ({ cancelButton = false, onClick, children }) => {
  return (
    <Container ghost={cancelButton} onClick={onClick}>
      {children}
    </Container>
  );
};

export default ModalButton;
