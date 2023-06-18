import { Container } from './styles';

interface IBackdropProps {
  handler: () => void;
  active: boolean;
}

const Backdrop = ({ handler, active }: IBackdropProps): JSX.Element => {
  return <Container active={active} onClick={handler} />;
};

export default Backdrop;
