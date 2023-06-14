import { NodeObject } from 'react-force-graph-2d';

const addNode = (automaton: IAutomaton, node: NodeObject) => {
  automaton.nodes.push(node);
  return automaton;
};

export default addNode;
