import { IAutomaton } from '@/@types/components/Automaton';

const deselectAllNodes = (automaton: IAutomaton): IAutomaton => {
  automaton.nodes.forEach((node) => {
    node.selected = false;
  });

  return automaton;
};

export default deselectAllNodes;
