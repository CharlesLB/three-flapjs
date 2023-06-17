import { IAutomaton, INode } from '@/@types/components/Automaton';

const getSmallestId = (automaton: IAutomaton): number => {
  let fieldToSort = 'id';
  automaton.nodes.sort(function (a, b) {
    return a[fieldToSort] - b[fieldToSort];
  });

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (i !== automaton.nodes[i].id) {
      return i;
    }
  }

  return automaton.nodes.length;
};

const addNode = (automaton: IAutomaton, node?: INode): IAutomaton => {
  const id = node?.id ?? getSmallestId(automaton);

  return {
    ...automaton,
    nodes: [
      ...automaton.nodes,
      {
        id,
        name: node?.name ?? `q${id}`
      }
    ]
  };
};

export default addNode;
