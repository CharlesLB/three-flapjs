import { describe, test, expect } from 'vitest';
import deleteLink from '.';

describe('deleteLink', () => {
  test('should delete the link between the given source and target nodes', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB' }]
    };

    const result = deleteLink(automaton, 1, 2);

    expect(result.links.length).toBe(0);
  });

  test('should throw an error when the source node ID does not exist', () => {
    const automaton = {
      nodes: [{ id: 2, name: 'B' }],
      links: []
    };

    expect(() => {
      deleteLink(automaton, 1, 2);
    }).toThrow('There is no head node with this ID');
  });

  test('should throw an error when the target node ID does not exist', () => {
    const automaton = {
      nodes: [{ id: 1, name: 'A' }],
      links: []
    };

    expect(() => {
      deleteLink(automaton, 1, 2);
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
      deleteLink(automaton, 1, 2);
    }).toThrow('Não existe link com esse ID');
  });
});
