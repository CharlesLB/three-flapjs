import React from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';

const PreferencesModal: React.FC = () => {
  const submitHandler = () => {};

  return (
    <ModalLayout title="Preferences" submitHandler={submitHandler} big>
      <Container></Container>
    </ModalLayout>
  );
};

export default PreferencesModal;
