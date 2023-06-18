import { IAutomaton, INode } from '@/@types/components/Automaton';

const getStartNode = (automaton: IAutomaton): INode | null => {
  const startNode = automaton.nodes.find((node) => node.start === true) || null;
  return startNode;
};

export default getStartNode;
