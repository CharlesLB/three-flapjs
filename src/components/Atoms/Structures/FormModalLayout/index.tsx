import React from 'react';

import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { closeModal } from '@/redux/slices/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import ModalButton from '../../Buttons/ModalButton';

interface Props {
  title: string;
  children?: React.ReactNode;
  submitHandler: () => boolean;
  cancelHandler?: () => void;
  submitText?: string;
  big?: boolean;
}

const FormModalLayout: React.FC<Props> = ({ title, children, cancelHandler, submitHandler, submitText = 'Save' }) => {
  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    if (cancelHandler) {
      cancelHandler();
    }

    dispatch(closeModal());
  };

  const submitModal = () => {
    const success = submitHandler();
    if (!success) return;
    dispatch(closeModal());
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    submitModal();
  };

  return (
    <Container onSubmit={(e) => onFormSubmit(e)}>
      <header>
        <h2>{title}</h2>
        <a onClick={() => onCloseModal()}>
          <RiCloseFill size={24} color="#ccc" />
        </a>
      </header>
      <main>{children}</main>
      <footer>
        <ModalButton type="button" onClick={() => onCloseModal()} cancelButton>
          Cancel
        </ModalButton>
        <ModalButton type="submit" onClick={() => submitModal()}>
          {submitText}
        </ModalButton>
      </footer>
    </Container>
  );
};

export default FormModalLayout;
