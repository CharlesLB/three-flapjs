import { IAutomaton } from '@/@types/components/Automaton';
import getSmallestId from '../GetSmallestId';

const addNode = (automaton: IAutomaton): IAutomaton => {
  const id = getSmallestId(automaton);

  return {
    ...automaton,
    nodes: [
      ...automaton.nodes,
      {
        id,
        name: `q${id}`
      }
    ]
  };
};

export default addNode;
