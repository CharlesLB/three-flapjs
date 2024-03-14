import { describe, expect, it } from 'vitest';
import deselectNode from '.';

describe('deselectNode', () => {
  it('should set the selected property of the specified node to false', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: true },
        { id: 2, name: 'q2', selected: true },
        { id: 3, name: 'q3', selected: true }
      ],
      links: []
    };

    const id = 2;
    const result = deselectNode(automaton, id);

    expect(result.nodes.find((node) => node.id === id)?.selected).toBe(false);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: true },
        { id: 2, name: 'q2', selected: true },
        { id: 3, name: 'q3', selected: true }
      ],
      links: []
    };

    const id = 4;

    expect(() => {
      deselectNode(automaton, id);
    }).toThrowError('Node does not exist');
  });
});
