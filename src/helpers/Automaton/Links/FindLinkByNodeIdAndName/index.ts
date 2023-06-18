import { IAutomaton, ILink } from '@/@types/components/Automaton';

const findLinkByNodeIdAndName = (automaton: IAutomaton, idNode: any, name: string): ILink | null => {
  return (
    automaton.links.find((link) => {
      //@ts-ignore
      return link.source.id === idNode && link.name === name;
    }) || null
  );
};

export default findLinkByNodeIdAndName;
