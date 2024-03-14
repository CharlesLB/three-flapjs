import React from 'react';

import { Container } from './styles';

interface Props {
  cancelButton?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const ModalButton: React.FC<Props> = ({ cancelButton = false, onClick, children, type }) => {
  return (
    <Container ghost={cancelButton} onClick={onClick} type={type}>
      {children}
    </Container>
  );
};

export default ModalButton;
