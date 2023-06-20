import { Container } from './styles';
import Switch from 'react-switch';
import { useFormikContext } from 'formik';
import { useState } from 'react';

interface ISwitchInput {
  data: IFormMakerInput;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  value: any;
  error: any;
}

const SwitchInput: React.FC<ISwitchInput> = (props: ISwitchInput): JSX.Element => {
  const { data, value } = props;

  const [isChecked, setIsChecked] = useState<boolean>(value);
  const { setFieldValue } = useFormikContext();

  const changeValue = (value: boolean) => {
    setFieldValue(data.id, value);
    setIsChecked(value);
  };

  return (
    <Container>
      <label htmlFor={data.id}>{data.label}</label>
      <span>{data.description}</span>
      <Switch onChange={changeValue} checked={isChecked} />
    </Container>
  );
};

export default SwitchInput;
