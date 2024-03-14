import { IAutomaton, ILink } from '@/@types/components/Automaton';

const findLinkByNodeIdAndName = (automaton: IAutomaton, idNode: number, name: string): ILink | null => {
  return (
    automaton.links.find((link) => {
      const nameSplit = link.name.split(',');
      return nameSplit.some((substring: string) => {
        const trimmedString = substring.replace(/\s/g, '');
        //@ts-ignore
        return trimmedString === name && link.source.id === idNode;
      });
    }) || null
  );
};

export default findLinkByNodeIdAndName;
