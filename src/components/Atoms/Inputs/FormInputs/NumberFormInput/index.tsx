import React from 'react';

import { Container, Input } from './styles';

interface Props {
  data: IFormMakerInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  value: any;
  error: any;
}

const NumberFormInput: React.FC<Props> = ({ data, value, handleBlur, onChange }) => {
  return (
    <Container>
      <label htmlFor={data.id}>{data.label}</label>
      <span>{data.description}</span>

      <Input type="number" id={data.id} name={data.id} value={value} onChange={onChange} onBlur={handleBlur} />
    </Container>
  );
};

export default NumberFormInput;
