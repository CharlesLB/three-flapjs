import React, { useState } from 'react';

import { Container } from './styles';
import LabelledInput from '@/components/Molecules/LabelledInput';
import SimpleButton from '@/components/Atoms/Buttons/SimpleButton';
import { useAppDispatch } from '@/redux/hooks';
import { changeAction } from '@/redux/slices/automatonStorageSlice';

const TestList: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const submit = () => {
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
        <LabelledInput placeholder="String" value={value} setValues={setValue} />
      </main>

      <footer>
        <SimpleButton label="Test" onClick={() => submit()} />
      </footer>
    </Container>
  );
};

export default TestList;
