import { IAutomaton, INode } from '@/@types/components/Automaton';
import getStartNode from '../Nodes/GetStartNode';
import findLinkByNodeIdAndName from '../Links/FindLinkByNodeIdAndName';
import checkIfAutomatonIsAFD from '..';
import selectNode from '../Nodes/SelectNode';
import deselectNode from '../Nodes/DeselectNode';

const p = (automaton: IAutomaton, currentNode: INode, char: string): INode => {
  const link = findLinkByNodeIdAndName(automaton, currentNode.id, char[0]);

  if (!link) {
    console.log(`Calculing P(${currentNode?.name}, ${char[0]}) = Not exist`);
    throw new Error(
      `This word is not accepted in the automaton: There is no transition from ${currentNode?.name} to the element ${char[0]}`
    );
  }

  //@ts-ignore
  console.log(`Calculing Pe(${currentNode?.name}, ${char[0]}) = ${link?.target.name}`);

  //@ts-ignore
  return link.target;
};

const stringTestInAutomaton = (automaton: IAutomaton, word: string): boolean => {
  checkIfAutomatonIsAFD(automaton);

  let currentNode = getStartNode(automaton);
  if (!currentNode) {
    throw new Error('Its not AFD: There is no initial state');
  }

  //@ts-ignore
  selectNode(automaton, currentNode.id);

  for (let i = 0; i < word.length; i++) {
    const newCurrentNode = p(automaton, currentNode, word[i]);

    //@ts-ignore
    deselectNode(automaton, currentNode.id);
    //@ts-ignore
    selectNode(automaton, newCurrentNode.id);

    currentNode = newCurrentNode;
  }

  if (!currentNode?.end) {
    console.log(`This word is not accepted in the automaton: The state ${currentNode?.name} not is final state`);
    return false;
  }

  console.log(`This word is accepted in the automaton: The state ${currentNode?.name} is final state`);
  return true;
};

export default stringTestInAutomaton;
