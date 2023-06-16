import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import editNode from '../EditNode';

const checkNameNodes = (automaton: IAutomaton, id: number): number => {
  for (let i = id; i < automaton.nodes.length; i++) {
    const wordsName = automaton.nodes[i].name.split('');

    if (wordsName[0] === 'q') {
      const newId = `q${i}`;
      editNode(automaton, i + 1, newId.toString());
    }
  }

  return id;
};

const deleteNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  const index = automaton.nodes.indexOf(node);
  automaton.nodes.splice(index, 1);

  checkNameNodes(automaton, id);

  return automaton;
};

export default deleteNode;
