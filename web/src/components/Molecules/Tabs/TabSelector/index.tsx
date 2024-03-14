import React from 'react';

import { Container } from './styles';
import Tab from './Tab';

interface Props {
  tabs: ITab[];
  selected: string;
  setSelected: (id: string) => void;
}

const TabSelector: React.FC<Props> = ({ tabs, selected, setSelected }) => {
  return (
    <Container>
      {tabs.map((tab, index) => (
        <Tab selected={tab.id === selected} setSelected={setSelected} key={index} {...tab} />
      ))}
    </Container>
  );
};

export default TabSelector;
