import BigModalLayout from '@/components/Atoms/Structures/BigModalLayout';
import React from 'react';

import { Container } from './styles';

const PreferencesModal: React.FC = () => {
  const submitHandler = () => {
    console.log('submit');
  };

  return (
    <BigModalLayout title="Preferences" submitHandler={submitHandler}>
      <Container></Container>
    </BigModalLayout>
  );
};

export default PreferencesModal;
