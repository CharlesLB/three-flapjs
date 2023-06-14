import React from 'react';
import { Container } from './styles';
import dynamic from 'next/dynamic';
const Automaton3D = dynamic(() => import('./Automaton3D'), { ssr: false });
const Automaton2D = dynamic(() => import('./Automaton2D'), { ssr: false });

const Automaton: React.FC = () => {
  return (
    <Container>
      {/* <Automaton3D /> */}
      <Automaton2D />
    </Container>
  );
};

export default Automaton;
