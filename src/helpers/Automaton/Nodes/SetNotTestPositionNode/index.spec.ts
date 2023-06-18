import { describe, expect, it } from 'vitest';
import setNotTestPositionNode from '.';
import findNodeById from '../FindNodeById';

describe('setNotTestPositionNode', () => {
  it('should unset the test position for a node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', testPosition: true },
        { id: 2, name: 'Node 2', testPosition: true },
        { id: 3, name: 'Node 3', testPosition: true }
      ],
      links: []
    };

    const nodeId = 2;
    const updatedAutomaton = setNotTestPositionNode(automaton, nodeId);

    const updatedNode = findNodeById(updatedAutomaton, nodeId);
    expect(updatedNode).to.not.be.null;
    expect(updatedNode!.testPosition).to.be.false;

    updatedAutomaton.nodes.forEach((node) => {
      if (node.id !== nodeId) {
        expect(node.testPosition).toBe(true);
      }
    });
  });

  it('should throw an error for non-existing node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', testPosition: true },
        { id: 2, name: 'Node 2', testPosition: true }
      ],
      links: []
    };

    const invalidNodeId = 3;

    expect(() => setNotTestPositionNode(automaton, invalidNodeId)).to.throw('Node does not exist');
  });
});
