import React from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';

const EditLinkModal: React.FC<IModalSlice> = ({ data, callback }) => {
  const submitHandler = () => {
    console.log(data);
    if (callback) callback();
  };

  return (
    <ModalLayout title="Edit Link" submitHandler={submitHandler}>
      <Container></Container>
    </ModalLayout>
  );
};

export default EditLinkModal;
