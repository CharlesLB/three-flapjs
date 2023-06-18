import { describe, expect, it } from 'vitest';
import setNotAllTestPositionNodes from '.';

describe('setNotAllTestPositionNodes', () => {
  it('should unset the test position for all nodes', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', testPosition: true },
        { id: 2, name: 'Node 2', testPosition: true },
        { id: 3, name: 'Node 3', testPosition: true }
      ],
      links: []
    };

    const updatedAutomaton = setNotAllTestPositionNodes(automaton);

    const allTestPositionsFalse = updatedAutomaton.nodes.every((node) => {
      expect(node.testPosition).toBe(false);
      return true;
    });

    expect(allTestPositionsFalse).toBe(true);
  });
});
