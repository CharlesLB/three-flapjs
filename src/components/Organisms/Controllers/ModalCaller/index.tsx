import React from 'react';

import { Container } from './styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getModal, resetModal } from '@/redux/slices/modalSlice';
import Backdrop from '@/components/Atoms/Structures/Backdrop';
import PreferencesModal from '../../Modals/PreferencesModal';

const ModalCaller: React.FC = () => {
  const modal = useAppSelector(getModal);
  const dispatch = useAppDispatch();

  if (!modal.type) return <></>;

  return (
    <Container>
      <Backdrop handler={() => dispatch(resetModal())} active />

      {
        {
          preferences: <PreferencesModal />
        }[modal.type]
      }
    </Container>
  );
};

export default ModalCaller;
