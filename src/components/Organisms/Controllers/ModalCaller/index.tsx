import React, { useEffect } from 'react';

import { Container } from './styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getModal, resetModal } from '@/redux/slices/modalSlice';
import Backdrop from '@/components/Atoms/Structures/Backdrop';

const ModalCaller: React.FC = () => {
  const modal = useAppSelector(getModal);
  const dispatch = useAppDispatch();

  if (!modal.type) return <></>;

  return (
    <Container>
      <Backdrop handler={() => dispatch(resetModal())} active />
    </Container>
  );
};

export default ModalCaller;