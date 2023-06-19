import { IAutomaton, ILink } from '@/@types/components/Automaton';

const findLinkByNodeIdAndName = (automaton: IAutomaton, idNode: number, name: string): ILink | null => {
  return (
    automaton.links.find((link) => {
      const nameSplit = link.name.split(', ');
      for (let i = 0; i < nameSplit.length; i++) {
        //@ts-ignore
        if (nameSplit[i] == name && link.source.id === idNode) {
          return link;
        }
      }
    }) || null
  );
};

export default findLinkByNodeIdAndName;
