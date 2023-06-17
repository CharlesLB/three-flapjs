import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import editNode from '../EditNode';

const getSmallestId = (automaton: IAutomaton): number => {
  var fieldToSort = 'id';
  automaton.nodes.sort(function (a, b) {
    return a[fieldToSort] - b[fieldToSort];
  });

  for (let i = 0; i < automaton.nodes.length; i++) {
    if (i !== automaton.nodes[i].id) {
      return i;
    }
  }

  return automaton.nodes.length;
};

const editDefaultNameNodes = (automaton: IAutomaton, id: number): void => {
  for (let i = id; i < automaton.nodes.length; i++) {
    console.log('- ' + i + ' ' + automaton.nodes[i].name);
    if (automaton.nodes[i].name[0] === 'q') {
      const smalledId = getSmallestId(automaton);
      const newId = `q${smalledId}`;
      editNode(automaton, i + 1, newId.toString());
    }
    console.log(' ' + (i - 1) + ' ' + automaton.nodes[i - 1].name);
  }
};

const deleteNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  const index = automaton.nodes.indexOf(node);
  automaton.nodes.splice(index, 1);

  automaton.nodes.sort();

  editDefaultNameNodes(automaton, id);

  return automaton;
};

export default deleteNode;
