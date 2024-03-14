import { describe, expect, it } from 'vitest';
import selectNode from '.';

describe('selectNode', () => {
  it('should set the selected property of the specified node to true', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: false },
        { id: 2, name: 'q2', selected: false },
        { id: 3, name: 'q3', selected: false }
      ],
      links: []
    };

    const id = 2;
    const result = selectNode(automaton, id);

    expect(result.nodes.find((node) => node.id === id)?.selected).toBe(true);
  });

  it('should set the selected property of the specified node to true', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: true },
        { id: 2, name: 'q2', selected: false },
        { id: 3, name: 'q3', selected: false }
      ],
      links: []
    };

    const id = 1;
    const result = selectNode(automaton, 1);

    expect(result.nodes.find((node) => node.id === id)?.selected).toBe(false);
  });

  it('should throw an error if the specified node does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', selected: false },
        { id: 2, name: 'q2', selected: false },
        { id: 3, name: 'q3', selected: false }
      ],
      links: []
    };

    const id = 4;

    expect(() => {
      selectNode(automaton, id);
    }).toThrowError('Node does not exist');
  });
});
