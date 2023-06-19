import React from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';

const EditNodeModal: React.FC = () => {
  const submitHandler = () => {
    console.log('submit');
  };

  return (
    <ModalLayout title="Edit Node" submitHandler={submitHandler}>
      <Container></Container>
    </ModalLayout>
  );
};

export default EditNodeModal;
