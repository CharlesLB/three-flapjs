import React from 'react';

import { Container } from './styles';
import DropdownNav from '@/components/Molecules/DropdownNav';
import { AppConfig } from '@/config';
import { useAppDispatch } from '@/redux/hooks';
import { changeAction } from '@/redux/slices/automatonStorageSlice';
import { getDataFromFile, getFileFromUser } from '@/utils/file';
import { validateAutomaton } from '@/utils/automaton';
import useLog from '@/hooks/useLog';
import { callModal } from '@/redux/slices/modalSlice';
import OddAOddB from '@/utils/mocks/OddAOddB';
import mocks from '@/utils/mocks';

const DashboardHeader: React.FC = () => {
  const logger = useLog();
  const dispatch = useAppDispatch();

  const getAutomatonFromUser = async () => {
    await getFileFromUser().then((file) => {
      getDataFromFile(file).then((data) => {
        if (validateAutomaton(data)) {
          dispatch(
            changeAction({
              type: 'load',
              data: data
            })
          );

          return;
        }

        logger.logError('You have selected an invalid file.');
      });
    });
  };

  const menu: INavigation[] = [
    {
      label: 'File',
      items: [
        {
          label: 'Open',
          onClick: () => getAutomatonFromUser()
        },
        {
          label: 'Save',
          onClick: () => {
            dispatch(
              changeAction({
                type: 'save'
              })
            );
          }
        },
        {
          label: 'Export',
          onClick: () => {
            dispatch(
              changeAction({
                type: 'export'
              })
            );
          }
        }
      ]
    },
    {
      label: 'View',
      items: [
        {
          label: 'Preferences',
          onClick: () => {
            dispatch(
              callModal({
                type: 'preferences'
              })
            );
          }
        }
      ]
    },
    {
      label: 'Examples',
      items: mocks.map((mock) => ({
        label: mock.name,
        onClick: () => {
          dispatch(
            changeAction({
              type: 'load',
              data: mock.automaton
            })
          );
        }
      }))
    },
    {
      label: 'About',
      items: [
        {
          label: 'Github Page',
          uri: AppConfig.github,
          target: '_blank',
          onClick: () => {
            window.open(AppConfig.github, '_blank');
          }
        }
      ]
    }
  ];

  return (
    <Container>
      {menu.map((item, index) => (
        <DropdownNav key={index} {...item} />
      ))}
    </Container>
  );
};

export default DashboardHeader;
