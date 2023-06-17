import { describe, test, expect } from 'vitest';
import editNode from '.';
import findNodeById from '../FindNodeById';

describe('editNode', () => {
  test('should edit the name and ID of the node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: []
    };

    const editedAutomaton = editNode(automaton, 2, 'D');

    const node = findNodeById(editedAutomaton, 2);

    expect(node).toBeUndefined();

    const nodeWithNameD = editedAutomaton.nodes.find((node) => node.name === 'D');

    expect(nodeWithNameD).toBeDefined();
  });

  test('should throw an error if the new name already exists', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' }
      ],
      links: []
    };

    expect(() => {
      editNode(automaton, 2, 'A');
    }).toThrowError('Name already exists');
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
      editNode(automaton, 4, 'D');
    }).toThrowError('Node does not exist');
  });
});
