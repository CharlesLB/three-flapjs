import { IAutomaton } from '@/@types/components/Automaton';

const sortIdNodes = (automaton: IAutomaton): number => {
  let fieldToSort = 'id';
  automaton.nodes.sort(function (a, b) {
    return a[fieldToSort] - b[fieldToSort];
  });

  return 0;
};

export default sortIdNodes;
