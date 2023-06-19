import { IAutomaton, INode } from '@/@types/components/Automaton';
import getSmallestId from '../GetSmallestId';

const addNode = (automaton: IAutomaton, node?: INode): IAutomaton => {
  const id = node?.id ?? getSmallestId(automaton);

  return {
    ...automaton,
    nodes: [
      ...automaton.nodes,
      {
        id,
        name: node?.name ?? `q${id}`,
        ...node
      }
    ]
  };
};

export default addNode;
