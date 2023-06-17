import { describe, test, expect } from 'vitest';
import findNodeById from '.';

describe('findNodeById', () => {
  test('should return the node with the specified id', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: []
    };

    const node1 = findNodeById(automaton, 1);
    expect(node1?.name).toBe('A');

    const node2 = findNodeById(automaton, 2);
    expect(node2?.name).toBe('B');

    const node3 = findNodeById(automaton, 3);
    expect(node3?.name).toBe('C');

    const node4 = findNodeById(automaton, 4);
    expect(node4).toBeUndefined();
  });
});
