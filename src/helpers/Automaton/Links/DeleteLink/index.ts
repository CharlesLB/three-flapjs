import { IAutomaton, ILink } from '@/@types/components/Automaton';
import findNodeById from '../../Nodes/FindNodeById';
import findLinkByNodesId from '../FindLinkByNodesId';

const deleteLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number): IAutomaton => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('Não existe nó cabeça com esse ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('Não existe nó cauda com esse ID');
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
