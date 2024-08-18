import React from 'react';

import { Container, Footer, FooterLeft, FooterRight } from './styles';
import { Validator } from '@/utils/validations/validator';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { defaultPreferences, getPreferences, update } from '@/redux/slices/preferencesSlice';
import FormMaker from '../../Forms/FormMaker';
import ModalButton from '@/components/Atoms/Buttons/ModalButton';
import { closeModal } from '@/redux/slices/modalSlice';
import BigModalLayout from '@/components/Atoms/Structures/BigModalLayout';
import TextButton from '@/components/Atoms/Buttons/TextButton';

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
      },
      {
        id: 'link-particlesSpeed',
        label: 'Particles Speed',
        type: 'number',
        description: 'Speed of the particles',
        initialValue: preferences.link.particlesSpeed,
        validation: Validator.number().min(0.1)
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
      },
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
        id: 'link-width',
        label: 'Link Width',
        type: 'number',
        description: 'Width of the link',
        initialValue: preferences.link.width,
        validation: Validator.number().min(1)
      },
      {
        id: 'link-arrowLength',
        label: 'Link Arrow Length',
        type: 'number',
        description: 'Length of the arrow',
        initialValue: preferences.link.arrowLength,
        validation: Validator.number().min(1)
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
      },
      {
        id: 'node-color',
        label: 'Node Label Color',
        type: 'color',
        description: 'Color of the node',
        initialValue: preferences.node.color,
        validation: Validator.string()
      }
    ],
    [
      {
        id: 'node-size',
        label: 'Node Size',
        type: 'number',
        description: 'Size of the node',
        initialValue: preferences.node.size,
        validation: Validator.number().min(8)
      }
    ],
    [
      {
        id: 'exhibition',
        type: 'label',
        label: 'Exhibition'
      }
    ],
    [
      {
        id: 'timer',
        label: 'Timer',
        type: 'number',
        description: 'Time in milliseconds to wait before the next iteration',
        initialValue: preferences.timer,
        validation: Validator.number().min(100)
      }
    ]
  ];

  const resetHandler = () => {
    dispatch(update(defaultPreferences));
    dispatch(closeModal());
  };

  const submitHandler = (values: any): boolean => {
    const newPreferences: IPreferences = {
      link: {
        particles: values['link-particles'],
        color: values['link-backgroundColor'] || defaultPreferences.link.color,
        background: values['link-color'] || defaultPreferences.link.background,
        particlesSpeed: values['link-particlesSpeed'] || defaultPreferences.link.particlesSpeed,
        arrowLength: values['link-arrowLength'] || defaultPreferences.link.arrowLength,
        width: values['link-width'] || defaultPreferences.link.width
      },
      node: {
        autoAdjust: values['node-autoAdjust'],
        background: values['node-background'] || defaultPreferences.node.background,
        color: values['node-color'] || defaultPreferences.node.color,
        size: values['node-size'] || defaultPreferences.node.size
      },
      exhibition: '2d',
      timer: values['timer']
    };

    dispatch(update(newPreferences));
    dispatch(closeModal());

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
              <FooterLeft>
                <TextButton onClick={() => resetHandler()}>Reset</TextButton>
              </FooterLeft>

              <FooterRight>
                <ModalButton onClick={() => dispatch(closeModal())} cancelButton>
                  Cancel
                </ModalButton>
                <ModalButton onClick={() => submit()}>Save</ModalButton>
              </FooterRight>
            </Footer>
          )}
        />
      </Container>
    </BigModalLayout>
  );
};

export default PreferencesModal;
