import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const setNotEndNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.end = false;

  return automaton;
};

export default setNotEndNode;
