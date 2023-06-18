import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const selectNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.selected = true;

  return automaton;
};

export default selectNode;
