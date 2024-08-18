import React from 'react';

import { Container } from './styles';
import { RiCloseFill } from 'react-icons/ri';
import { closeModal } from '@/redux/slices/modalSlice';
import { useAppDispatch } from '@/redux/hooks';

interface Props {
  title: string;
  children?: React.ReactNode;
  big?: boolean;
}

const BigModalLayout: React.FC<Props> = ({ title, children }) => {
  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <Container>
      <header>
        <h2>{title}</h2>
        <a onClick={() => onCloseModal()}>
          <RiCloseFill size={24} color="#ccc" />
        </a>
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default BigModalLayout;
