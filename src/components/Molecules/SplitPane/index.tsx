import React from 'react';

import { Container } from './styles';
import { SplitPaneProps } from 'react-split-pane';

type Props = SplitPaneProps & {
  children: React.ReactNode;
};

const SplitPane: React.FC<Props> = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default SplitPane;
