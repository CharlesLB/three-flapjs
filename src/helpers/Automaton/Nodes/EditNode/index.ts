import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import sortIdNodes from '../SortIdNodes';

const checkValidName = (automaton: IAutomaton, name: string): boolean => {
  const nameExists = automaton.nodes.some((node) => node.name === name);

  return !nameExists;
};

const getAleatoryId = (automaton: IAutomaton): number => {
  const id = Math.floor(Math.random() * (100 - automaton.nodes.length) + automaton.nodes.length);

  const foundNode = automaton.nodes.find((node) => node.id === id);

  if (foundNode) {
    return getAleatoryId(automaton);
  }

  return id;
};

const getNewId = (automaton: IAutomaton, name: string): number => {
  if (name[0] === 'q') {
    return parseInt(name.slice(1, name.length));
  }
  sortIdNodes(automaton);
  return getAleatoryId(automaton);
};

const editNode = (automaton: IAutomaton, id: any, name: string): IAutomaton => {
  if (!checkValidName(automaton, name)) {
    throw new Error('Name already exists');
  }

  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Node does not exist');
  }

  node.name = name;
  node.id = getNewId(automaton, name);

  return automaton;
};

export default editNode;
