import React from 'react';

import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { resetModal } from '@/redux/slices/modalSlice';
import { useAppDispatch } from '@/redux/hooks';

interface Props {
  title: string;
  children?: React.ReactNode;
  submitHandler: () => void;
  cancelHandler?: () => void;
  submitText?: string;
}

const BigModalLayout: React.FC<Props> = ({ title, children, cancelHandler, submitHandler, submitText = 'Save' }) => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    if (cancelHandler) {
      cancelHandler();
    }

    dispatch(resetModal());
  };

  const submitModal = () => {
    dispatch(resetModal());
    submitHandler();
  };

  return (
    <Container>
      <header>
        <h2>{title}</h2>
        <button>
          <RiCloseFill size={24} color="#ccc" />
        </button>
      </header>
      <main>{children}</main>
      <footer>
        <button onClick={() => closeModal()} className="button is-ghost">
          Cancel
        </button>
        <button onClick={() => submitModal()} className="button is-primary">
          {submitText}
        </button>
      </footer>
    </Container>
  );
};

export default BigModalLayout;
