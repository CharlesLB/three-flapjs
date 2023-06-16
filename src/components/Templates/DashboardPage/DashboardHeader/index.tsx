import React, { useState } from 'react';

import { Container } from './styles';
import DropdownNav from '@/components/Molecules/DropdownNav';

const DashboardHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const menu = [
    {
      label: 'File'
    },
    {
      label: 'View'
    },
    {
      label: 'About'
    }
  ];

  return (
    <Container>
      {menu.map((item, index) => (
        <DropdownNav open={open} setOpen={setOpen} key={index} {...item} />
      ))}
    </Container>
  );
};

export default DashboardHeader;
