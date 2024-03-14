import React from 'react';

import { Container } from './styles';

interface Props {
  data: IFormMakerInput;
}

const Label: React.FC<Props> = ({ data }) => {
  const { label } = data;

  return (
    <Container>
      <h2>{label}</h2>
    </Container>
  );
};

export default Label;
