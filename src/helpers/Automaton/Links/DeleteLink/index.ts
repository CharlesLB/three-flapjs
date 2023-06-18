import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../../Nodes/FindNodeById';
import findLinkByNodesId from '../FindLinkByNodesId';

const deleteLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number): IAutomaton => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('There is no head node with this ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('There is no tail node with this ID');
  }

  const link = findLinkByNodesId(automaton, nodeSource, nodeTarget);

  if (!link) {
    throw new Error('Não existe link com esse ID');
  }

  const index = automaton.links.indexOf(link);
  automaton.links.splice(index, 1);

  return automaton;
};

export default deleteLink;
