import { describe, expect, it } from 'vitest';
import setEndNode from '.';

describe('setEndNode', () => {
  it('should set the end property of the specified node to true', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', end: false },
        { id: 2, name: 'q2', end: true },
        { id: 3, name: 'q3', end: false }
      ],
      links: []
    };

    const result = setEndNode(automaton, 1);

    const node = result.nodes.find((n) => n.id === 1);
    expect(node?.end).toBe(true);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', end: false },
        { id: 2, name: 'q2', end: true }
      ],
      links: []
    };

    expect(() => setEndNode(automaton, 3)).toThrow('Node does not exist');
  });
});
