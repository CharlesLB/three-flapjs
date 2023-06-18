import { IAutomaton, ILink } from '@/@types/components/Automaton';

const findAllLinksByNodeId = (automaton: IAutomaton, idNode: any): ILink[] => {
  const linksById: ILink[] = [];

  automaton.links.forEach((link) => {
    //@ts-ignore
    if (link.source.id === idNode) {
      linksById.push(link);
    }
  });

  return linksById;
};

export default findAllLinksByNodeId;
