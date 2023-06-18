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
    throw new Error(
      `This word is not accepted in the automaton: There is no transition from ${currentNode?.name} to the element ${char[0]}`
    );
  }

  //@ts-ignore
  console.log(`Where P(${currentNode?.name}, ${char[0]}) = ${link?.target.name}`);

  //@ts-ignore
  return link.target;
};
const pe = (automaton: IAutomaton, currentNode: INode, word: string): INode => {
  if (word.length === 1) {
    console.log(`Calculing Pe(P(${currentNode?.name}, ${word[0]}), ε)`);
  }

  if (word.length > 1) {
    console.log(`Calculing Pe(P(${currentNode?.name}, ${word[0]}), ${word.slice(1, word.length)})`);
  }

  let newCurrentNode = p(automaton, currentNode, word[0]);

  //@ts-ignore
  setNotTestPositionNode(automaton, currentNode.id);
  //@ts-ignore
  setTestPositionNode(automaton, newCurrentNode.id);

  return newCurrentNode;
};

export { p };

export default pe;
