import React, { useState } from 'react';

import { Container } from './styles';
import LabelledInput from '@/components/Molecules/LabelledInput';
import SimpleButton from '@/components/Atoms/Buttons/SimpleButton';

const TestList: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const submit = () => {
    alert(value);
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
