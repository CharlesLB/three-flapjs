import { describe, test, expect } from 'vitest';
import findNodeById from '../FindNodeById';
import deleteNode, { editDefaultNameNodes } from '.';

describe('deleteNode', () => {
  test('should delete the node and its associated links', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: [
        {
          source: { id: 1, name: 'A' },
          target: { id: 2, name: 'B' },
          name: 'Link1'
        },
        {
          source: { id: 2, name: 'B' },
          target: { id: 3, name: 'C' },
          name: 'Link2'
        }
      ]
    };

    const updatedAutomaton = deleteNode(automaton, 2);

    expect(updatedAutomaton.nodes).toEqual([
      { id: 1, name: 'A' },
      { id: 3, name: 'C' }
    ]);

    expect(updatedAutomaton.links).toEqual([]);

    expect(findNodeById(updatedAutomaton, 2)).toBeUndefined();
  });

  test('should throw an error if the node with the given ID does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: []
    };

    expect(() => {
      deleteNode(automaton, 4);
    }).toThrowError('Não existe nó com esse ID');
  });
});

describe('editDefaultNameNodes', () => {
  test('should update node names starting with "q" from the given id', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' },
        { id: 3, name: 'p1' },
        { id: 4, name: 'q3' }
      ],
      links: []
    };

    const expectedAutomaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' },
        { id: 3, name: 'p1' },
        { id: 0, name: 'q0' }
      ],
      links: []
    };

    editDefaultNameNodes(automaton, 3);

    expect(automaton).toEqual(expectedAutomaton);
  });
});
