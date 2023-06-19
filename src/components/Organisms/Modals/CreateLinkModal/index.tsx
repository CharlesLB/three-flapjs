import React, { useState } from 'react';

import { Container } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';
import LabelledInput from '@/components/Molecules/InputGroups/LabelledInput';
import { checkLinkString } from '@/utils/string';

const CreateLinkModal: React.FC<IModalSlice> = ({ callback }) => {
  const [value, setValue] = useState<string>('');

  const submitHandler = () => {
    if (validation(value)) return;

    if (callback) callback(value);
  };

  const validation = (value: string): string | void => {
    if (!value) {
      return 'Cannot be empty';
    }

    if (!checkLinkString(value)) {
      return 'Repeated values or invalid string';
    }

    return;
  };

  return (
    <ModalLayout title="Create Link" submitHandler={submitHandler}>
      <Container>
        <LabelledInput placeholder="String" value={value} setValue={setValue} validation={validation} />
      </Container>
    </ModalLayout>
  );
};

export default CreateLinkModal;
