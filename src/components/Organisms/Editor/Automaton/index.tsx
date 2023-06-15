import React, { useState } from 'react';
import { Container } from './styles';
import dynamic from 'next/dynamic';
import { IAutomaton } from '@/@types/components/Automaton';
const Automaton3D = dynamic(() => import('./Automaton3D'), { ssr: false });
const Automaton2D = dynamic(() => import('./Automaton2D'), { ssr: false });

const Automaton: React.FC = () => {
  const counterX = 100;
  const counterY = 100;

  const generateRandomX = () => {
    const windowSize = (window.innerWidth-(0.2*window.innerWidth))/4;

    const a = Math.random() * windowSize;
    const b = Math.random() * windowSize;

    return b - a;
  }

  
  const generateRandomY = () => {
    const windowSize = (window.innerHeight-(0.2*window.innerHeight))/4;

    const a = Math.random() * windowSize;
    const b = Math.random() * windowSize;

    return b - a;
  }

  const [data, setData] = useState<IAutomaton>({
    // @ts-ignore
    nodes: [...Array(3).keys()].map((i) => ({ id: i, name: i, fx: generateRandomX(), fy: generateRandomY()})),
    links: [
      { source: 0, target: 0, curvature: 0.8, name: 0, rotation: (Math.PI * 1) / 6 },
      { source: 0, target: 1, name: 0 },
      { source: 2, target: 1, name: 1, curvature: 0.3 },
      { source: 1, target: 2, name: 2, curvature: 0.3 },
    ]
  });
  return (
    <Container>
      {/* <Automaton3D data={data} setData={setData} /> */}
      <Automaton2D data={data} setData={setData} />
    </Container>
  );
};

export default Automaton;
