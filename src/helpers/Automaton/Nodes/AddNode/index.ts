import { IAutomaton } from '@/@types/components/Automaton';

const getSmallestId = (automaton: IAutomaton): number => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (i !== automaton.nodes[i].id) {
      return i;
    }
  }

  return automaton.nodes.length;
};

const addNode = (automaton: IAutomaton): IAutomaton => {
  const id = getSmallestId(automaton);

  return {
    ...automaton,
    nodes: [
      ...automaton.nodes,
      {
        id: id,
        name: `q${id}`
      }
    ]
  };
};

export default addNode;
