import { describe, test, expect } from 'vitest';
import editLink from '.';

describe('editLink', () => {
  test('should edit the name of the link between the given source and target nodes', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB' }]
    };

    const result = editLink(automaton, 1, 2, 'New Link AB');

    expect(result.links[0].name).toBe('New Link AB');
  });

  test('should throw an error when the source node ID does not exist', () => {
    const automaton = {
      nodes: [{ id: 2, name: 'B' }],
      links: []
    };

    expect(() => {
      editLink(automaton, 1, 2, 'New Link AB');
    }).toThrow('There is no head node with this ID');
  });

  test('should throw an error when the target node ID does not exist', () => {
    const automaton = {
      nodes: [{ id: 1, name: 'A' }],
      links: []
    };

    expect(() => {
      editLink(automaton, 1, 2, 'New Link AB');
    }).toThrow('There is no tail node with this ID');
  });

  test('should throw an error when the link between the given nodes does not exist', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 2, name: 'B' }, target: { id: 3, name: 'C' }, name: 'Link BC' }]
    };

    expect(() => {
      editLink(automaton, 1, 2, 'New Link AB');
    }).toThrow('There is no link with these nodes');
  });
});
