import React from 'react';

import { Container } from './styles';

interface Props {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  error?: boolean;
}

const StringInput: React.FC<Props> = ({ placeholder = 'Search', value, setValue, error }) => {
  return <Container placeholder={placeholder} error={error} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default StringInput;
