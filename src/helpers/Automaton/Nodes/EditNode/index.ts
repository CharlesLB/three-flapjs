import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const checkValidName = (automaton: IAutomaton, name: string): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (name === automaton.nodes[i].name) {
      return false;
    }
  }

  return true;
};

const getValidId = (automaton: IAutomaton): number => {
  automaton.nodes.sort();

  const id = Math.floor(Math.random() * (100 - automaton.nodes.length) + automaton.nodes.length);

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (id == automaton.nodes[i].id) {
      return getValidId(automaton);
    }
  }

  return id;
};

const editNode = (automaton: IAutomaton, id: number, name: string): IAutomaton => {
  if (!checkValidName(automaton, name)) {
    throw new Error('Nome já existente');
  }

  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  // @ts-ignore
  node.name = name;

  const wordsName = name.split('');
  if (wordsName[0] === 'q') {
    const numberId = parseInt(name.slice(1, name.length));
    // @ts-ignore
    node.id = numberId;
  } else {
    // @ts-ignore
    node.id = getValidId(automaton);
  }

  return automaton;
};

export default editNode;
