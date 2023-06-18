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

  console.log('xxx', automaton.links);

  const index = automaton.nodes.indexOf(node);
  automaton.nodes.splice(index, 1);

  sortIdNodes(automaton);

  editDefaultNameNodes(automaton, id);

  return automaton;
};

export default deleteNode;
