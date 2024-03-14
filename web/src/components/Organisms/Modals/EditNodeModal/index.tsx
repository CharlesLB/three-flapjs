import React, { useState } from 'react';

import { Container } from './styles';
import FormModalLayout from '@/components/Atoms/Structures/FormModalLayout';
import LabelledInput from '@/components/Molecules/InputGroups/LabelledInput';

const EditNodeModal: React.FC<IModalSlice> = ({ data, callback }) => {
  const { name, nodeNames } = data;

  const [value, setValue] = useState<string>(name || '');

  const submitHandler = (): boolean => {
    if (validation(value)) return false;

    if (callback) callback(value);

    return true;
  };

  const validation = (value: string): string | void => {
    if (!value) {
      return 'Cannot be empty';
    }

    if (nodeNames.includes(value) && value !== name) {
      return 'Repeated values';
    }

    return;
  };

  return (
    <FormModalLayout title="Edit Node" submitHandler={submitHandler}>
      <Container>
        <LabelledInput placeholder="String" value={value} setValue={setValue} validation={validation} />
      </Container>
    </FormModalLayout>
  );
};

export default EditNodeModal;
