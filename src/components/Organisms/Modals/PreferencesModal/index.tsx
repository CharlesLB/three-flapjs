import React from 'react';

import { Container, Footer } from './styles';
import { Validator } from '@/utils/validations/validator';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { defaultPreferences, getPreferences, update } from '@/redux/slices/preferencesSlice';
import FormMaker from '../../Forms/FormMaker';
import ModalButton from '@/components/Atoms/Buttons/ModalButton';
import { resetModal } from '@/redux/slices/modalSlice';
import BigModalLayout from '@/components/Atoms/Structures/BigModalLayout';

const PreferencesModal: React.FC = () => {
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
        id: 'link-particles',
        label: 'Particles',
        type: 'boolean',
        description: 'Particles that move around the link',
        initialValue: preferences.link.particles,
        validation: Validator.boolean()
      }
    ],
    [
      {
        id: 'link-backgroundColor',
        label: 'Link Color',
        type: 'color',
        description: 'Color of the link',
        initialValue: preferences.link.color,
        validation: Validator.string()
      }
    ],
    [
      {
        id: 'link-color',
        label: 'Link Label Color',
        type: 'color',
        description: 'Color of the link label',
        initialValue: preferences.link.background,
        validation: Validator.string()
      }
    ],
    [
      {
        id: 'node',
        label: 'Node',
        type: 'label'
      }
    ],
    [
      {
        id: 'node-autoAdjust',
        label: 'Node Auto Adjust',
        type: 'boolean',
        description: 'Node try to find the best location to be displayed when you move another node',
        initialValue: preferences.node.autoAdjust,
        validation: Validator.boolean()
      }
    ],
    [
      {
        id: 'node-background',
        label: 'Node background color',
        description: 'Color of the node background',
        type: 'color',
        placeholder: '',
        initialValue: preferences.node.background,
        validation: Validator.string()
      }
    ],
    [
      {
        id: 'node-color',
        label: 'Node Label Color',
        type: 'color',
        description: 'Color of the node',
        initialValue: preferences.node.color,
        validation: Validator.string()
      }
    ]
  ];

  const submitHandler = (values: any): boolean => {
    const newPreferences: IPreferences = {
      link: {
        particles: values['link-particles'],
        color: values['link-backgroundColor'] || defaultPreferences.link.color,
        background: values['link-color'] || defaultPreferences.link.background
      },
      node: {
        autoAdjust: values['node-autoAdjust'],
        background: values['node-background'] || defaultPreferences.node.background,
        color: values['node-color'] || defaultPreferences.node.color
      },
      exhibition: '2d'
    };

    console.log(newPreferences, values['link-particles']);

    dispatch(update(newPreferences));
    dispatch(resetModal());

    return true;
  };

  return (
    <BigModalLayout title="Preferences" big>
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
    </BigModalLayout>
  );
};

export default PreferencesModal;
