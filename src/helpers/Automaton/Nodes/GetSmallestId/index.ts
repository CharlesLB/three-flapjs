import { IAutomaton } from '@/@types/components/Automaton';
import sortIdNodes from '../SortIdNodes';

const getSmallestId = (automaton: IAutomaton): number => {
  sortIdNodes(automaton);

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (i !== automaton.nodes[i].id) {
      return i;
    }
  }

  return automaton.nodes.length;
};

export default getSmallestId;
