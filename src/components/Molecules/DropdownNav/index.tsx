import React, { useState } from 'react';

import { Container } from './styles';

interface Props {
  label: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownNav: React.FC<Props> = ({ label, open, setOpen }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container onClick={() => setOpen(!open)} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {label}
    </Container>
  );
};

export default DropdownNav;