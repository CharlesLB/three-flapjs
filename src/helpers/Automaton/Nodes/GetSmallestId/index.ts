import { IAutomaton } from '@/@types/components/Automaton';
import sortIdNodes from '../SortIdNodes';

const getSmallestId = (automaton: IAutomaton): number => {
  sortIdNodes(automaton);

  const smallestId = automaton.nodes.findIndex((node, index) => index !== node.id);

  return smallestId !== -1 ? smallestId : automaton.nodes.length;
};

export default getSmallestId;
