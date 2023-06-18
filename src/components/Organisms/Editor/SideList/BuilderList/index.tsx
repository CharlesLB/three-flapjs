import React, { useState } from 'react';

import { Container } from './styles';
import SearchInput from '@/components/Atoms/Inputs/StringInput';
import BuilderOptions from './BuilderOptions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { changeMode, getAutomatonStorage } from '@/redux/slices/automatonStorageSlice';
import { IAutomatonStorageMode } from '@/@types/redux/AutomatonStorage';

const BuilderList: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const dispatch = useAppDispatch();
  const automatonStorage = useAppSelector(getAutomatonStorage);

  const buildOptions: {
    label: string;
    items: {
      label: string;
      state: IAutomatonStorageMode;
    }[];
  }[] = [
    {
      label: 'Mode',
      items: [
        { label: 'Move', state: 'move' },
        { label: 'Delete', state: 'delete' }
      ]
    },
    {
      label: 'Nodes',
      items: [
        { label: 'Create Node', state: 'node:create' },
        { label: 'Edit Node', state: 'node:edit' },
        { label: 'Delete Node', state: 'node:delete' },
        { label: 'Set Started node', state: 'node:started' },
        { label: 'Set Finished node', state: 'node:end' }
      ]
    },
    {
      label: 'Links',
      items: [
        { label: 'Create Link', state: 'link:create' },
        { label: 'Edit Link', state: 'link:edit' },
        { label: 'Delete Link', state: 'link:delete' }
      ]
    }
  ];

  const handleState = (newState: IAutomatonStorageMode) => {
    if (newState === automatonStorage.mode) {
      dispatch(changeMode('move'));
      return;
    }

    dispatch(changeMode(newState));
  };

  return (
    <Container>
      <header>
        <SearchInput setValues={setSearch} value={search} />
      </header>
      <BuilderOptions buildOptions={buildOptions} search={search} state={automatonStorage.mode} handleState={handleState} />
    </Container>
  );
};

export default BuilderList;
