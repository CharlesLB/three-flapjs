import { describe, expect, it } from 'vitest';
import setNotEndNode from '.';

describe('setNotEndNode', () => {
  it('should set the end property of the specified node to false', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', end: true },
        { id: 2, name: 'q2', end: false },
        { id: 3, name: 'q3', end: true }
      ],
      links: []
    };

    const result = setNotEndNode(automaton, 1);

    const node = result.nodes.find((n) => n.id === 1);
    expect(node?.end).toBe(false);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', end: true },
        { id: 2, name: 'q2', end: false }
      ],
      links: []
    };

    expect(() => setNotEndNode(automaton, 3)).toThrow('Node does not exist');
  });
});
