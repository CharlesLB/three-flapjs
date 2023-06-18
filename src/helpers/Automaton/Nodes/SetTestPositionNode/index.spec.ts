import { describe, expect, it } from 'vitest';
import setTestPositionNode from '.';
import findNodeById from '../FindNodeById';

describe('setTestPositionNode', () => {
  it('should set the test position for a node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', testPosition: false },
        { id: 2, name: 'Node 2', testPosition: false },
        { id: 3, name: 'Node 3', testPosition: false }
      ],
      links: []
    };

    const nodeId = 2;
    const updatedAutomaton = setTestPositionNode(automaton, nodeId);

    const updatedNode = findNodeById(updatedAutomaton, nodeId);
    expect(updatedNode).to.not.be.null;
    expect(updatedNode!.testPosition).to.be.true;

    updatedAutomaton.nodes.forEach((node) => {
      if (node.id !== nodeId) {
        expect(node.testPosition).toBe(false);
      }
    });
  });

  it('should throw an error for non-existing node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', testPosition: false },
        { id: 2, name: 'Node 2', testPosition: false }
      ],
      links: []
    };

    const invalidNodeId = 3;

    expect(() => setTestPositionNode(automaton, invalidNodeId)).to.throw('Node does not exist');
  });
});
