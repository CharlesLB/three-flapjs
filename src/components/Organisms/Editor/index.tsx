import React from 'react';

import { Container } from './styles';
import SplitPane from '@/components/Molecules/SplitPane';
import Automaton from './Automaton';
import SideList from './SideList';
import Logger from './Logger';

const Editor: React.FC = () => {
  const screenSize = window.screen.height;

  return (
    <Container>
      <SplitPane split="horizontal" minSize={50} maxSize={screenSize - 150} defaultSize={screenSize - 150}>
        <SplitPane split="vertical" minSize={220}>
          <SideList />
          <Automaton />
        </SplitPane>
        <Logger />
      </SplitPane>
    </Container>
  );
};

export default Editor;
