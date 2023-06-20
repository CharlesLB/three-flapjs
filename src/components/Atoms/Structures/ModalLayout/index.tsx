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
  big?: boolean;
}

const ModalLayout: React.FC<Props> = ({ title, children, cancelHandler, submitHandler, submitText = 'Save', big }) => {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    if (cancelHandler) {
      cancelHandler();
    }

    dispatch(resetModal());
  };

  const submitModal = () => {
    submitHandler();
    dispatch(resetModal());
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container onSubmit={(e) => onFormSubmit(e)} big={big}>
      <header>
        <h2>{title}</h2>
        <button onClick={() => closeModal()}>
          <RiCloseFill size={24} color="#ccc" />
        </button>
      </header>
      <main>{children}</main>
      {!big && (
        <footer>
          <ModalButton onClick={() => closeModal()} cancelButton>
            Cancel
          </ModalButton>
          <ModalButton type="submit" onClick={() => submitModal()}>
            {submitText}
          </ModalButton>
        </footer>
      )}
    </Container>
  );
};

export default ModalLayout;
