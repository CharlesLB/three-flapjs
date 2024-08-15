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
      <Switch
        onChange={changeValue}
        checked={Boolean(isChecked)}
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
      />
    </Container>
  );
};

export default SwitchInput;
