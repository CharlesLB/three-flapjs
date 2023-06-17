import React from 'react';

import { Container } from './styles';
import DropdownNav from '@/components/Molecules/DropdownNav';
import { AppConfig } from '@/config';

const DashboardHeader: React.FC = () => {
  const menu: INavigation[] = [
    {
      label: 'File',
      items: [
        {
          label: 'Open',
          onClick: () => {
            alert('Open');
          }
        },
        {
          label: 'Save',
          onClick: () => {
            alert('Save');
          }
        }
      ]
    },
    {
      label: 'View',
      items: [
        {
          label: 'Preferences',
          onClick: () => {
            alert('Preferences');
          }
        }
      ]
    },
    {
      label: 'About',
      items: [
        {
          label: 'Github Page',
          uri: AppConfig.github,
          onClick: () => {
            window.open(AppConfig.github, '_blank');
          }
        }
      ]
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
