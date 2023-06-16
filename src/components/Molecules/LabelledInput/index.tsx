import React from 'react';

import { Container } from './styles';
import StringInput from '@/components/Atoms/Inputs/StringInput';

interface Props {
  placeholder?: string;
  value: string;
  setValues: (value: string) => void;
}

const LabelledInput: React.FC<Props> = (props) => {
  return (
    <Container>
      <label>{props.placeholder}</label>
      <StringInput {...props} placeholder="" />
    </Container>
  );
};

export default LabelledInput;
