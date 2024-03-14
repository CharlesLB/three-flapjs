import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../FindNodeById';
import editNode from '../EditNode';
import getSmallestId from '../GetSmallestId';
import sortIdNodes from '../SortIdNodes';
import deleteLink from '../../Links/DeleteLink';

const editDefaultNameNodes = (automaton: IAutomaton, id: number): void => {
  automaton.nodes.forEach((node, i) => {
    if (i >= id && node.name[0] === 'q') {
      const smallestId = getSmallestId(automaton);
      const newId = `q${smallestId}`;
      editNode(automaton, node.id, newId.toString());
    }
  });
};

const deleteAssociatedLinks = (automaton: IAutomaton, id: number): void => {
  // @ts-ignore
  const linksToRemove = automaton.links.filter((link) => link.source.id === id || link.target.id === id);

  linksToRemove.forEach((link) => {
    // @ts-ignore
    automaton = deleteLink(automaton, link.source.id, link.target.id);
  });
};

const deleteNode = (automaton: IAutomaton, id: number): IAutomaton => {
  const node = findNodeById(automaton, id);

  if (!node) {
    throw new Error('Não existe nó com esse ID');
  }

  deleteAssociatedLinks(automaton, id);

  const index = automaton.nodes.indexOf(node);
  automaton.nodes.splice(index, 1);

  sortIdNodes(automaton);

  editDefaultNameNodes(automaton, id);

  return automaton;
};

export default deleteNode;

export { editDefaultNameNodes };
