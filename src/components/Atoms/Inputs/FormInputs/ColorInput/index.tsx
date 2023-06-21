import { Container } from './styles';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';

interface Props {
  data: IFormMakerInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  value: any;
  error: any;
}

const ColorInput: React.FC<Props> = (props: Props): JSX.Element => {
  const { data, value } = props;

  const [color, setColor] = useState<string>(value);
  const { setFieldValue } = useFormikContext();

  const changeValue = (e: any) => {
    setFieldValue(data.id, e.target.value);
    setColor(e.target.value);
  };

  return (
    <Container>
      <label htmlFor={data.id}>{data.label}</label>
      <span>{data.description}</span>
      <input type="color" id={data.id} name={data.id} value={color} onChange={changeValue} />
    </Container>
  );
};

export default ColorInput;
