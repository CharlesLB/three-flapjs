import React from 'react';

import { Container, Footer } from './styles';
import ModalLayout from '@/components/Atoms/Structures/ModalLayout';
import { Validator } from '@/utils/validations/validator';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getPreferences } from '@/redux/slices/preferencesSlice';
import FormMaker from '../../Forms/FormMaker';
import ModalButton from '@/components/Atoms/Buttons/ModalButton';
import { resetModal } from '@/redux/slices/modalSlice';

const PreferencesModal: React.FC = () => {
  const submitHandler = (): boolean => {
    return true;
  };

  const preferences = useAppSelector(getPreferences);
  const dispatch = useAppDispatch();

  const form: IFormMakerInput[][] = [
    [
      {
        id: 'link',
        label: 'Link',
        type: 'label'
      }
    ],
    [
      {
        id: 'link.particles',
        label: 'Particles',
        type: 'boolean',
        placeholder: 'Particles that move around the link',
        initialValue: preferences.link.particles,
        validation: Validator.boolean()
      }
    ]
  ];

  return (
    <ModalLayout title="Preferences" submitHandler={submitHandler} big>
      <Container>
        <FormMaker
          data={form}
          onSubmit={submitHandler}
          SubmitComponent={({ submit }) => (
            <Footer>
              <ModalButton onClick={() => dispatch(resetModal())} cancelButton>
                Cancel
              </ModalButton>
              <ModalButton onClick={() => submit()}>Save</ModalButton>
            </Footer>
          )}
        />
      </Container>
    </ModalLayout>
  );
};

export default PreferencesModal;
