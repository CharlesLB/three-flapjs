import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const setNotStartNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.start = false;

  return automaton;
};

export default setNotStartNode;
