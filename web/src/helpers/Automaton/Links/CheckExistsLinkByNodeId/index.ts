import { IAutomaton } from '@/@types/components/Automaton';

const checkExistsLinkByNodeId = (automaton: IAutomaton, idNode: number): boolean => {
  // @ts-ignore
  const link = automaton.links.find((link) => link.source?.id === idNode || link.target?.id === idNode);

  if (!link) {
    return false;
  }

  return true;
};

export default checkExistsLinkByNodeId;
