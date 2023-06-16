import React from 'react';

import { Container } from './styles';

interface Props {
  placeholder?: string;
  value: string;
  setValues: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ placeholder = 'Search', value, setValues }) => {
  return <Container placeholder={placeholder} value={value} onChange={(e) => setValues(e.target.value)} />;
};

export default SearchInput;
