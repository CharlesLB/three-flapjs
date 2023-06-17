import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import sortIdNodes from '../SortIdNodes';

const checkValidName = (automaton: IAutomaton, name: string): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (name === automaton.nodes[i].name) {
      return false;
    }
  }

  return true;
};

const getAleatoryId = (automaton: IAutomaton): number => {
  const id = Math.floor(Math.random() * (100 - automaton.nodes.length) + automaton.nodes.length);

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (id == automaton.nodes[i].id) {
      return getAleatoryId(automaton);
    }
  }

  return id;
};

const editNode = (automaton: IAutomaton, id: any, name: string): IAutomaton => {
  if (!checkValidName(automaton, name)) {
    throw new Error('Nome já existente');
  }

  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  let newId;
  if (name[0] === 'q') {
    newId = parseInt(name.slice(1, name.length));
  } else {
    sortIdNodes(automaton);
    newId = getAleatoryId(automaton);
  }

  // @ts-ignore
  node.name = name;
  // @ts-ignore
  node.id = newId;

  return automaton;
};

export default editNode;
