import React from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';

const CreateLinkModal: React.FC<IModalSlice> = ({ data, callback }) => {
  const submitHandler = () => {
    console.log(data);
    if (callback) callback('a');
  };

  return (
    <ModalLayout title="Create Link" submitHandler={submitHandler}>
      <Container></Container>
    </ModalLayout>
  );
};

export default CreateLinkModal;
