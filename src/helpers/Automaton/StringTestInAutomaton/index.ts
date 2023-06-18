import { IAutomaton, INode } from '@/@types/components/Automaton';
import getStartNode from '../Nodes/GetStartNode';
import findLinkByNodeIdAndName from '../Links/FindLinkByNodeIdAndName';
import checkIfAutomatonIsAFD from '..';
import setTestPositionNode from '../Nodes/SetTestPositionNode';
import setNotTestPositionNode from '../Nodes/SetNotTestPositionNode';

const p = (automaton: IAutomaton, currentNode: INode, char: string): INode => {
  const link = findLinkByNodeIdAndName(automaton, currentNode.id, char[0]);

  if (!link) {
    console.log(`Where P(${currentNode?.name}, ${char[0]}) = Not exist`);
    // throw new Error(
    //   `This word is not accepted in the automaton: There is no transition from ${currentNode?.name} to the element ${char[0]}`
    // );
  }

  //@ts-ignore
  console.log(`Where P(${currentNode?.name}, ${char[0]}) = ${link?.target.name}`);

  //@ts-ignore
  return link.target;
};

//Pe( P(q1, 'a'), 'b')
//Pe( P(q2, 'b'), 'E')
const pe = (automaton: IAutomaton, currentNode: INode, word: string): INode => {
  if (word.length > 1) {
    console.log(`Calculing Pe(P(${currentNode?.name}, ${word[0]}), ${word.slice(1, word.length)})`);
  } else {
    console.log(`Calculing Pe(P(${currentNode?.name}, ${word[0]}), ε)`);
  }

  const newCurrentNode = p(automaton, currentNode, word[0]);

  //@ts-ignore
  setNotTestPositionNode(automaton, currentNode.id);
  //@ts-ignore
  setTestPositionNode(automaton, newCurrentNode.id);

  setInterval(function () {
    if (word.length > 1) {
      console.log(`Calculing Pe(${newCurrentNode.name}, ${word.slice(1, word.length)})`);
      return pe(automaton, newCurrentNode, word.slice(1, word.length));
    }

    console.log(`Calculing Pe(${newCurrentNode.name}, ε) = ${newCurrentNode.name}`);

    return newCurrentNode;
  }, 3000);
};

const stringTestInAutomaton = (automaton: IAutomaton, word: string): boolean => {
  checkIfAutomatonIsAFD(automaton);

  let currentNode = getStartNode(automaton);
  if (!currentNode) {
    throw new Error('Its not AFD: There is no initial state');
  }

  //@ts-ignore
  setTestPositionNode(automaton, currentNode.id);

  currentNode = pe(automaton, currentNode, word);

  if (!currentNode?.end) {
    console.log(`This word is not accepted in the automaton: The state ${currentNode?.name} not is final state`);
    return false;
  }

  console.log(`This word is accepted in the automaton: The state ${currentNode?.name} is final state`);
  return true;
};

export default stringTestInAutomaton;
