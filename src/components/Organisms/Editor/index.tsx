import React, { useEffect } from 'react';

import { Container } from './styles';
import SplitPane from '@/components/Molecules/SplitPane';
import Automaton from './Automaton';
import SideList from './SideList';
import Logger from './Logger';
import 'intro.js/introjs.css';
import 'intro.js/themes/introjs-modern.css';
import Intro from '@/components/Organisms/Controllers/Intro';
import { useAppDispatch } from '@/redux/hooks';
import { getPreviousPreferences } from '@/redux/slices/preferencesSlice';

const Editor: React.FC = () => {
  const screenSize = window.screen.height;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPreviousPreferences());
  }, []);

  return (
    <>
      <Intro />
      <Container id="editor">
        <SplitPane split="horizontal" minSize={50} maxSize={screenSize - 150} defaultSize={screenSize - 150}>
          <SplitPane split="vertical" minSize={220}>
            <SideList />
            <Automaton />
          </SplitPane>
          <Logger />
        </SplitPane>
      </Container>
    </>
  );
};

export default Editor;
