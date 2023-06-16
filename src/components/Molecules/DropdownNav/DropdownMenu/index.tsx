import React from 'react';

import { Container } from './styles';

interface Props {
  active: boolean;
}

const DropdownMenu: React.FC<Props> = ({ active }) => {
  return (
    <Container active={active}>
      <div>test</div>
    </Container>
  );
};

export default DropdownMenu;
