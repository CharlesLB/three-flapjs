import React from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';

const EditNodeModal: React.FC<IModalSlice> = ({ data, callback }) => {
  const submitHandler = () => {
    if (callback) callback();
  };

  return (
    <ModalLayout title="Edit Node" submitHandler={submitHandler}>
      <Container></Container>
    </ModalLayout>
  );
};

export default EditNodeModal;
