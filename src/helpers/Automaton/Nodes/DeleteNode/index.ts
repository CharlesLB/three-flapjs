import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import editNode from '../EditNode';
import getSmallestId from '../GetSmallestId';
import sortIdNodes from '../SortIdNodes';
import deleteLink from '../../Links/DeleteLink';

const editDefaultNameNodes = (automaton: IAutomaton, id: number): void => {
  for (let i = id; i < automaton.nodes.length; i++) {
    if (automaton.nodes[i].name[0] === 'q') {
      const smalledId = getSmallestId(automaton);
      const newId = `q${smalledId}`;
      editNode(automaton, automaton.nodes[i].id, newId.toString());
    }
  }
};

const deleteNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  for (let i = 0; i < automaton.links.length; i++) {
    //@ts-ignore
    if (automaton.links[i].source.id === id || automaton.links[i].target.id === id) {
      //@ts-ignore
      automaton = deleteLink(automaton, automaton.links[i].source.id, automaton.links[i].target.id);
      i--;
    }
  }

  const index = automaton.nodes.indexOf(node);
  automaton.nodes.splice(index, 1);

  sortIdNodes(automaton);

  editDefaultNameNodes(automaton, id);

  return automaton;
};

export default deleteNode;
