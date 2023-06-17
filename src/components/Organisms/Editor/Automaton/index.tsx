import React, { useState } from 'react';
import { Container, Content } from './styles';
import dynamic from 'next/dynamic';
import { IAutomaton } from '@/@types/components/Automaton';
const Automaton3D = dynamic(() => import('./Automaton3D'), { ssr: false });
const Automaton2D = dynamic(() => import('./Automaton2D'), { ssr: false });

const Automaton: React.FC = () => {
  const [data, setData] = useState<IAutomaton>({
    // @ts-ignore
    nodes: [...Array(3).keys()].map((i) => ({ id: i, name: i })),
    links: [
      { source: 0, target: 0, curvature: 0.8, name: 0, rotation: (Math.PI * 1) / 6 },
      { source: 0, target: 1, name: 0 },
      { source: 2, target: 1, name: 1, curvature: 0.3 },
      { source: 1, target: 2, name: 2, curvature: 0.3 }
    ]
  });
  return (
    <Container>
      <Content>
        {/* <Automaton3D data={data} setData={setData} /> */}
        <Automaton2D data={data} setData={setData} />
      </Content>
    </Container>
  );
};

export default Automaton;
