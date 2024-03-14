import { describe, expect, it } from 'vitest';
import deselectAllNodes from '.';

describe('deselectAllNodes', () => {
  it('should set the selected property of all nodes to false', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: true },
        { id: 2, name: 'q2', selected: true },
        { id: 3, name: 'q3', selected: true }
      ],
      links: []
    };

    const result = deselectAllNodes(automaton);

    result.nodes.forEach((node) => {
      expect(node.selected).toBe(false);
    });
  });
});
