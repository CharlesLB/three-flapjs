import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';

const checkValidName = (automaton: IAutomaton, name: string): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    console.log(name + ' ' + automaton.nodes[i].name);

    if (name === automaton.nodes[i].name) {
      return false;
    }
  }

  // const node = automaton.nodes.find((node) => node.name === name);

  return true;
};

const getValidId = (automaton: IAutomaton): number => {
  const id = Math.floor(Math.random() * (100 - automaton.nodes.length) + automaton.nodes.length);

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (id == automaton.nodes[i].id) {
      return getValidId(automaton);
    }
  }

  return id;
};

const editNode = (automaton: IAutomaton, id: number, name: string): IAutomaton => {
  //nome já existente
  if (!checkValidName(automaton, name)) {
    throw new Error('Nome já existente');
  }

  const node = findNodeById(automaton, id);

  console.log('Node Edit- ' + node);

  // @ts-ignore
  node.name = name;
  // @ts-ignore
  node.id = getValidId(automaton);

  return automaton;
};

export default editNode;

/*const addNode = (automaton: IAutomaton): IAutomaton => {
  const id = getSmallestId(automaton);

  return {
    ...automaton,
    nodes: [
      ...automaton.nodes,
      {
        id: id,
        name: `q${id}`
      }
    ]
  };
};*/
