import { describe, expect, test } from 'vitest';
import getSmallestId from '.';

describe('getSmallestId', () => {
  test('should return the smallest available id for automaton1', () => {
    const automaton1 = {
      nodes: [
        { id: 2, name: 'B' },
        { id: 1, name: 'A' }
      ],
      links: []
    };

    const smallestId1 = getSmallestId(automaton1);

    expect(smallestId1).toEqual(0);
  });

  test('should return the smallest available id for automaton2', () => {
    const automaton2 = {
      nodes: [
        { id: 5, name: 'E' },
        { id: 4, name: 'D' },
        { id: 3, name: 'C' },
        { id: 0, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const smallestId2 = getSmallestId(automaton2);

    expect(smallestId2).toEqual(1);
  });
});
