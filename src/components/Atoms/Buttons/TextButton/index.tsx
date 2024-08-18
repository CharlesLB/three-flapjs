import React from 'react';

import { Container } from './styles';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const TextButton: React.FC<Props> = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default TextButton;
