import { describe, expect, it } from 'vitest';
import setNotStartNode from '.';

describe('setNotStartNode', () => {
  it('should set the start property of the specified node to false', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', start: true },
        { id: 2, name: 'q2', start: false },
        { id: 3, name: 'q3', start: true }
      ],
      links: []
    };

    const result = setNotStartNode(automaton, 1);

    const node = result.nodes.find((n) => n.id === 1);
    expect(node?.start).toBe(false);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', start: true },
        { id: 2, name: 'q2', start: false }
      ],
      links: []
    };

    expect(() => setNotStartNode(automaton, 3)).toThrow('Node does not exist');
  });
});
