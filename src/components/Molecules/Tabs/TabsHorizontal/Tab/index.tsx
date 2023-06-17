import React from 'react';

import { Container } from './styles';

interface Props {
  id: string;
  label: string;
  selected: boolean;
  setSelected: (id: string) => void;
}

const Tab: React.FC<Props> = ({ id, label, selected, setSelected }) => {
  return (
    <Container active={selected} onClick={() => setSelected(id)}>
      {label}
    </Container>
  );
};

export default Tab;
