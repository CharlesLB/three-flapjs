import React from 'react';

import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { resetModal } from '@/redux/slices/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import ModalButton from '../../Buttons/ModalButton';

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
        <button onClick={() => closeModal()}>
          <RiCloseFill size={24} color="#ccc" />
        </button>
      </header>
      <main>{children}</main>
      <footer>
        <ModalButton onClick={() => closeModal()} cancelButton>
          Cancel
        </ModalButton>
        <ModalButton onClick={() => submitModal()}>{submitText}</ModalButton>
      </footer>
    </Container>
  );
};

export default BigModalLayout;
