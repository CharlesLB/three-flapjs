import { describe, test, expect } from 'vitest';
import findLinkByNodesId from '.';

describe('findLinkByNodesId', () => {
  test('should return the link between the given source and target nodes', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB' }]
    };

    const nodeSource = { id: 1, name: 'A' };
    const nodeTarget = { id: 2, name: 'B' };

    const result = findLinkByNodesId(automaton, nodeSource, nodeTarget);

    expect(result).toEqual({ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB' });
  });

  test('should return null when there is no link between the given nodes', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 3, name: 'C' }, name: 'Link AC' }]
    };

    const nodeSource = { id: 1, name: 'A' };
    const nodeTarget = { id: 2, name: 'B' };

    const result = findLinkByNodesId(automaton, nodeSource, nodeTarget);

    expect(result).toBeNull();
  });
});
