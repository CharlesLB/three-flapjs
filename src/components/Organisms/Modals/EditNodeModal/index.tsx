import React, { useState } from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';
import LabelledInput from '@/components/Molecules/InputGroups/LabelledInput';

const EditNodeModal: React.FC<IModalSlice> = ({ data, callback }) => {
  const [value, setValue] = useState<string>(data || '');

  const submitHandler = (): boolean => {
    if (validation(value)) return false;

    if (callback) callback(value);

    return true;
  };

  const validation = (value: string): string | void => {
    if (!value) {
      return 'Cannot be empty';
    }

    return;
  };

  return (
    <ModalLayout title="Edit Node" submitHandler={submitHandler}>
      <Container>
        <LabelledInput placeholder="String" value={value} setValue={setValue} validation={validation} />
      </Container>
    </ModalLayout>
  );
};

export default EditNodeModal;
