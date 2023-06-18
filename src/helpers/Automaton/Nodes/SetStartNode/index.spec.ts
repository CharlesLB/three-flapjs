import { describe, expect, it } from 'vitest';
import setStartNode from '.';

describe('setStartNode', () => {
  it('should set the start property of the specified node to true', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', start: false },
        { id: 2, name: 'q2', start: false },
        { id: 3, name: 'q3', start: false }
      ],
      links: []
    };

    const id = 2;
    const result = setStartNode(automaton, id);

    expect(result.nodes.find((node) => node.id === id)?.start).toBe(true);
  });

  it('should set the start property of the specified node to true and disable other node that was the started node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', start: false },
        { id: 2, name: 'q2', start: false },
        { id: 3, name: 'q3', start: true }
      ],
      links: []
    };

    const id = 2;
    const result = setStartNode(automaton, id);

    expect(result.nodes.find((node) => node.id === 3)?.start).toBe(false);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', start: false },
        { id: 2, name: 'q2', start: false },
        { id: 3, name: 'q3', start: false }
      ],
      links: []
    };

    const id = 4;

    expect(() => {
      setStartNode(automaton, id);
    }).toThrowError('Node does not exist');
  });
});
