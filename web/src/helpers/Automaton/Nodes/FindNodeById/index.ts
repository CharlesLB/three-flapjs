import { IAutomaton } from '@/@types/components/Automaton';

const findNodeById = (automaton: IAutomaton, id: number) => {
  return automaton.nodes.find((node) => node.id === id);
};

export default findNodeById;
