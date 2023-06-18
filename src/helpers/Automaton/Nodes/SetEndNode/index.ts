import { IAutomaton, INode } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const setEndNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.end = true;

  return automaton;
};

export default setEndNode;
