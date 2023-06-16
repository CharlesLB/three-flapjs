import React, { useState } from 'react';

import { Container } from './styles';
import TabSelector from '@/components/Molecules/TabSelector';

const SideList: React.FC = () => {
  const [tab, setTab] = useState<string>('build');

  const tabs: {
    id: string;
    label: string;
  }[] = [
    { id: 'build', label: 'Build' },
    { id: 'test', label: 'Test' }
  ];

  return (
    <Container>
      <header>
        <TabSelector tabs={tabs} selected={tab} setSelected={setTab} />
      </header>
      <main>
        {
          {
            build: <div>Build</div>,
            test: <div>Test</div>
          }[tab]
        }
      </main>
    </Container>
  );
};

export default SideList;
