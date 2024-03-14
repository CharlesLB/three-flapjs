import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import StringInput from '@/components/Atoms/Inputs/StringInput';

interface Props {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  validation?: (value: string) => string | void;
}

const LabelledInput: React.FC<Props> = (props) => {
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (props.validation) {
      setError(props.validation(props.value) || undefined);
    }
  }, [props.value]);

  return (
    <Container error={!!error}>
      <label>{props.placeholder}</label>
      <main>
        <StringInput {...props} placeholder="" error={!!error} />
        {error && <span>{error}</span>}
      </main>
    </Container>
  );
};

export default LabelledInput;
