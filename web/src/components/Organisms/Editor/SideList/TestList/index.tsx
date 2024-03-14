import React, { useState } from 'react';

import { Container } from './styles';
import LabelledInput from '@/components/Molecules/InputGroups/LabelledInput';
import SimpleButton from '@/components/Atoms/Buttons/SimpleButton';
import { useAppDispatch } from '@/redux/hooks';
import { changeAction } from '@/redux/slices/automatonStorageSlice';
import { checkNoSpace } from '@/utils/string';

const TestList: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const validation = (value: string): string | void => {
    if (!checkNoSpace(value)) {
      return 'No spaces allowed';
    }

    return;
  };

  const submit = () => {
    if (validation(value)) return;

    dispatch(
      changeAction({
        type: 'test',
        data: value
      })
    );
  };

  return (
    <Container>
      <header>
        <h2>Testing</h2>
      </header>

      <main>
        <LabelledInput placeholder="String" value={value} setValue={setValue} validation={validation} />
      </main>

      <footer>
        <SimpleButton label="Test" onClick={() => submit()} />
      </footer>
    </Container>
  );
};

export default TestList;
