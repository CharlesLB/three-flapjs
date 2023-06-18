import { IAutomaton } from '@/@types/components/Automaton';

const setNotAllTestPositionNodes = (automaton: IAutomaton): IAutomaton => {
  automaton.nodes.forEach((node) => {
    node.testPosition = false;
  });

  return automaton;
};

export default setNotAllTestPositionNodes;
