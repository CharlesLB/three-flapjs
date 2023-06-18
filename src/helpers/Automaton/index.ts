import { IAutomaton, ILink } from '@/@types/components/Automaton';
import checkExistsLinkByNodeId from './Links/CheckExistsLinkByNodeId';
import findAllLinksByNodeId from './Links/FindAllLinksByNodeId';

const checkIfStartStateExists = (automaton: IAutomaton): boolean => {
  return automaton.nodes.some((node) => node.start);
};

const checkIfEndStateExists = (automaton: IAutomaton): boolean => {
  return automaton.nodes.some((node) => node.end);
};

const checkIfNotIsolatedStateExists = (automaton: IAutomaton): boolean => {
  return automaton.nodes.every((node) => {
    //@ts-ignore
    const existLinkByNode = checkExistsLinkByNodeId(automaton, node.id);
    return existLinkByNode;
  });
};

const checkIfAllNamesLinksByNodeAreDifferents = (automaton: IAutomaton): boolean => {
  return automaton.nodes.every((node) => {
    const linksByNode: ILink[] = findAllLinksByNodeId(automaton, node.id);
    return linksByNode.every((link, index) => {
      return !linksByNode.some((otherLink, otherIndex) => {
        return index !== otherIndex && link.name === otherLink.name;
      });
    });
  });
};

const checkIfAutomatonIsAFD = (automaton: IAutomaton): boolean => {
  const existStartState = checkIfStartStateExists(automaton);
  if (!existStartState) {
    throw new Error('Its not AFD: There is no initial state');
  }

  const existEndState = checkIfEndStateExists(automaton);
  if (!existEndState) {
    throw new Error('Its not AFD: There is no end state');
  }

  const existNotIsolatedState = checkIfNotIsolatedStateExists(automaton);
  if (!existNotIsolatedState) {
    throw new Error('Its not AFD: There is isolated state');
  }

  const allNamesLinksByNodeAreDifferents = checkIfAllNamesLinksByNodeAreDifferents(automaton);
  if (!allNamesLinksByNodeAreDifferents) {
    throw new Error('Its not AFD: Exists Names Links Of Node Equals'); //(?)
  }

  return true;
};

export { checkIfStartStateExists, checkIfEndStateExists, checkIfNotIsolatedStateExists, checkIfAllNamesLinksByNodeAreDifferents };

export default checkIfAutomatonIsAFD;
