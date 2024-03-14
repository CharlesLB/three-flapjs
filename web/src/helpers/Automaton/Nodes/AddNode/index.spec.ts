import { describe, test, expect } from 'vitest';
import addNode from '.';

describe('addNode', () => {
  test('should add a new node with default name', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const updatedAutomaton = addNode(automaton);

    expect(updatedAutomaton.nodes).toEqual([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 0, name: 'q0' }
    ]);
  });

  test('should add a new node with the provided name', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const newNode = {
      id: 3,
      name: 'C'
    };

    const updatedAutomaton = addNode(automaton, newNode);

    expect(updatedAutomaton.nodes).toEqual([
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
      { id: 3, name: 'C' }
    ]);
  });
});
