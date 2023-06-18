import { IAutomaton, ILink } from '@/@types/components/Automaton';

const findLinkByNodeIdAndName = (automaton: IAutomaton, idNode: any, name: String): ILink | null => {
  for (let i = 0; i < automaton.links.length; i++) {
    const link = automaton.links[i];

    //@ts-ignore
    if (link.source.id === idNode && link.name === name) {
      return link;
    }
  }

  return null;
};

export default findLinkByNodeIdAndName;
