import { IAutomaton } from '@/@types/components/Automaton';
import OddAOddB from './OddAOddB';
import EndWithThreeAs from './EndWithThreeAs';
import thereIsAAOrBB from './ThereIsAAOrBB';

const mocks: {
  name: string;
  automaton: IAutomaton;
}[] = [
  {
    name: 'Odd A Odd B',
    automaton: OddAOddB
  },
  {
    name: "End With Three A's",
    automaton: EndWithThreeAs
  },
  {
    name: 'There is AA or BB',
    automaton: thereIsAAOrBB
  }
];

export default mocks;
