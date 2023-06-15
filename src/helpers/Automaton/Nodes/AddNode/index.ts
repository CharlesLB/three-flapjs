import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const getSmallestId = (automaton: IAutomaton): number => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    const nodeId = findNodeById(automaton, i);
    if (!nodeId) {
      return i;
    }
  }

  return automaton.nodes.length;
};

const addNode = (automaton: IAutomaton): IAutomaton => {
  const id = getSmallestId(automaton);

  automaton.nodes.push({
    id: id,
    name: `q${id}`
  });

  return automaton;
};

export default addNode;
