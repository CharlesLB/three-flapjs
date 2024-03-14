import React from 'react';

import { Container } from './styles';

interface Props {
  label: string;
  onClick: () => void;
}

const SimpleButton: React.FC<Props> = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default SimpleButton;
