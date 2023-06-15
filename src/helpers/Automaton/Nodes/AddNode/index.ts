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

  automaton.nodes.push({
    id: id,
    name: `q${id}`
  });

  return automaton;
};

export default addNode;
