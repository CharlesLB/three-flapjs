import { IAutomaton, INode } from '@/@types/components/Automaton';

const findLinkByNodesId = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode): INode | null => {
  const link = automaton.links.find((link) => link.source?.id === nodeSource?.id && link.target?.id === nodeTarget?.id);
  if (!link) {
    return null;
  }

  return link;
};

export default findLinkByNodesId;
