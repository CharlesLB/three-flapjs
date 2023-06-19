import React from 'react';

import { Container } from './styles';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getModal, resetModal } from '@/redux/slices/modalSlice';
import Backdrop from '@/components/Atoms/Structures/Backdrop';
import PreferencesModal from '../../Modals/PreferencesModal';
import EditNodeModal from '../../Modals/EditNodeModal';
import EditLinkModal from '../../Modals/EditLinkModal';
import CreateLinkModal from '../../Modals/CreateLinkModal';

const ModalCaller: React.FC = () => {
  const modal = useAppSelector(getModal);
  const dispatch = useAppDispatch();

  if (!modal.type) return <></>;

  return (
    <Container>
      <Backdrop handler={() => dispatch(resetModal())} active />

      {
        {
          preferences: <PreferencesModal />,
          'node:edit': <EditNodeModal {...modal} />,
          'link:edit': <EditLinkModal {...modal} />,
          'link:create': <CreateLinkModal {...modal} />
        }[modal.type]
      }
    </Container>
  );
};

export default ModalCaller;
