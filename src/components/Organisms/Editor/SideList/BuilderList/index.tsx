import React, { useState } from 'react';

import { Container, ListItem } from './styles';
import SearchInput from '@/components/Atoms/Inputs/SearchInput';

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
      <main>
        {buildOptions.map((option, index) => (
          <div key={index}>
            <h3>{option.label}</h3>
            <ul>
              {option.items.map((item, index) => (
                <ListItem active={state === item.state} key={index} onClick={() => handleState(item.state)}>
                  {item.label}
                </ListItem>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </Container>
  );
};

export default BuilderList;
