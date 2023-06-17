import { describe, test, expect } from 'vitest';
import findNodeById from '../FindNodeById';
import deleteNode from '.';

describe('deleteNode', () => {
  test('should delete the node and its associated links', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: [
        { source: 1, target: 2, name: 'Link1' },
        { source: 2, target: 3, name: 'Link2' }
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
