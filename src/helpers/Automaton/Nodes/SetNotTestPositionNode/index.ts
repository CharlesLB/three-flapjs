import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const setNotTestPositionNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.testPosition = false;

  return automaton;
};

export default setNotTestPositionNode;
