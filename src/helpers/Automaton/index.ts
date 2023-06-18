import { IAutomaton, ILink } from '@/@types/components/Automaton';
import checkExistsLinkByNodeId from './Links/CheckExistsLinkByNodeId';
import findAllLinksByNodeId from './Links/FindAllLinksByNodeId';

const checkIfStartStateExists = (automaton: IAutomaton): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (automaton.nodes[i].start) {
      return true;
    }
  }

  return false;
};

const checkIfEndStateExists = (automaton: IAutomaton): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    if (automaton.nodes[i].end) {
      return true;
    }
  }

  return false;
};

const checkIfNotIsolatedStateExists = (automaton: IAutomaton): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    //@ts-ignore
    const existLinkByNode = checkExistsLinkByNodeId(automaton, automaton.nodes[i].id);

    if (!existLinkByNode) {
      return false;
    }
  }

  return true;
};

const checkIfAllNamesLinksByNodeAreDifferents = (automaton: IAutomaton): boolean => {
  for (let i = 0; i < automaton.nodes.length; i++) {
    const linksByNode: ILink[] = findAllLinksByNodeId(automaton, automaton.nodes[i].id);

    for (let j = 0; j < linksByNode.length; j++) {
      for (let k = 0; k < linksByNode.length; k++) {
        if (linksByNode[j].name === linksByNode[k].name && linksByNode[j] !== linksByNode[k]) {
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
    throw new Error('Not is AFD: There is no initial state');
  }

  const existEndState = checkIfEndStateExists(automaton);
  if (!existEndState) {
    throw new Error('Not is AFD: There is no end state');
  }

  const existNotIsolatedState = checkIfNotIsolatedStateExists(automaton);
  if (!existNotIsolatedState) {
    throw new Error('Not is AFD: There is isolated state');
  }

  const allNamesLinksByNodeAreDifferents = checkIfAllNamesLinksByNodeAreDifferents(automaton);
  if (!allNamesLinksByNodeAreDifferents) {
    throw new Error('Not is AFD: Exists Names Links Of Node Equals'); //(?)
  }

  return true;
};

export default checkIfAutomatonIsAFD;
