import { IAutomaton, ILink } from '@/@types/components/Automaton';
import checkExistsLinkByNodeId from './Links/CheckExistsLinkByNodeId';
import findAllLinksByNodeId from './Links/FindAllLinksByNodeId';
import findLinkByNodeIdAndName from './Links/FindLinkByNodeIdAndName';

const checkIfStartStateExists = (automaton: IAutomaton): boolean => {
  return automaton.nodes.some((node) => node.start);
};

const checkIfNotEmptyTransitionExists = (automaton: IAutomaton): boolean => {
  return automaton.links.every((link) => {
    //@ts-ignore
    let existEmptyTransition = findLinkByNodeIdAndName(automaton, link.source.id, 'ε');
    if (existEmptyTransition) {
      return false;
    }

    return true;
  });
};

const checkIfNotIsolatedStateExists = (automaton: IAutomaton): boolean => {
  return automaton.nodes.every((node) => {
    //@ts-ignore
    const existLinkByNode = checkExistsLinkByNodeId(automaton, node.id);
    return existLinkByNode;
  });
};

const comparingIfLinkNameIsEquals = (nameLink: string, nameOtherLink: string): boolean => {
  const nameLinkSplit = nameLink.split(', ');
  const nameOtherLinkSplit = nameOtherLink.split(', ');

  for (let i = 0; i < nameLinkSplit.length; i++) {
    for (let j = 0; j < nameLinkSplit.length; j++) {
      if (nameLinkSplit[i] === nameOtherLinkSplit[j]) {
        return true;
      }
    }
  }

  return false;
};

const checkIfAllNamesLinksByNodeAreDifferents = (automaton: IAutomaton): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    const linksByNode: ILink[] = findAllLinksByNodeId(automaton, automaton.nodes[i].id);

    for (let j = 0; j < linksByNode.length; j++) {
      for (let k = 0; k < linksByNode.length; k++) {
        if (linksByNode[j] !== linksByNode[k] && comparingIfLinkNameIsEquals(linksByNode[j].name, linksByNode[k].name)) {
          return false;
        }
      }
    }
  }

  return true;
};

const checkIfAutomatonIsAFD = (automaton: IAutomaton): boolean => {
  const existStartState = checkIfStartStateExists(automaton);
  if (!existStartState) {
    throw new Error('Its not AFD: There is no initial state');
  }

  const notExistEmptyTransition = checkIfNotEmptyTransitionExists(automaton);
  console.log(notExistEmptyTransition);
  if (!notExistEmptyTransition) {
    throw new Error('Its not AFD: There is empty transition');
  }

  const existNotIsolatedState = checkIfNotIsolatedStateExists(automaton);
  if (!existNotIsolatedState) {
    throw new Error('Its not AFD: There is isolated state');
  }

  const allNamesLinksByNodeAreDifferents = checkIfAllNamesLinksByNodeAreDifferents(automaton);
  if (!allNamesLinksByNodeAreDifferents) {
    throw new Error('Its not AFD: Exists Names Links Of Node Equals');
  }

  return true;
};

export { checkIfStartStateExists, checkIfNotIsolatedStateExists, checkIfAllNamesLinksByNodeAreDifferents };

export default checkIfAutomatonIsAFD;
