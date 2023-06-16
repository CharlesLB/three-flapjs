import React, { useState } from 'react';

import { Container } from './styles';
import SearchInput from '@/components/Atoms/Inputs/StringInput';
import BuilderOptions from './BuilderOptions';

const BuilderList: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [state, setState] = useState<string>('move');

  const buildOptions: {
    label: string;
    items: {
      label: string;
      state: string;
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
        { label: 'Set Finished node', state: 'node:finished' }
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

  const handleState = (newState: string) => {
    if (newState === state) {
      setState('move');
      return;
    }

    setState(newState);
  };

  return (
    <Container>
      <header>
        <SearchInput setValues={setSearch} value={search} />
      </header>
      <BuilderOptions buildOptions={buildOptions} search={search} state={state} handleState={handleState} />
    </Container>
  );
};

export default BuilderList;
