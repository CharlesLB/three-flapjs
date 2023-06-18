import { IAutomaton, INode } from '@/@types/components/Automaton';

const getStartNode = (automaton: IAutomaton): INode | null => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (automaton.nodes[i].start === true) {
      return automaton.nodes[i];
    }
  }

  return null;
};

export default getStartNode;
