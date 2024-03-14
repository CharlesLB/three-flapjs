import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../../Nodes/FindNodeById';
import findLinkByNodesId from '../FindLinkByNodesId';

const editLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number, name: string): IAutomaton => {
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
    throw new Error('There is no link with these nodes');
  }

  link.name = name;

  return automaton;
};

export default editLink;
