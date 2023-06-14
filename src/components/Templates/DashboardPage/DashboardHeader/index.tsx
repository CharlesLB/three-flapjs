import React from 'react';

import { Container } from './styles';
import DropdownNav from '@/components/Molecules/DropdownNav';

const DashboardHeader: React.FC = () => {
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
        <DropdownNav key={index} {...item} />
      ))}
    </Container>
  );
};

export default DashboardHeader;
