import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const setEndNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.end = !node.end;

  return automaton;
};

export default setEndNode;
