import { describe, expect, test } from 'vitest';
import findAllLinksByNodeId from '.';

describe('findAllLinksByNodeId', () => {
  test('should return an array of links with matching node ID', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1' },
        { id: 2, name: 'Node 2' },
        { id: 3, name: 'Node 3' }
      ],
      links: [
        { name: 'Link 1', source: { id: 1 }, target: { id: 2 } },
        { name: 'Link 2', source: { id: 2 }, target: { id: 3 } },
        { name: 'Link 3', source: { id: 1 }, target: { id: 3 } },
        { name: 'Link 4', source: { id: 3 }, target: { id: 2 } }
      ]
    };

    const result1 = findAllLinksByNodeId(automaton, 1);
    const result2 = findAllLinksByNodeId(automaton, 2);
    const result3 = findAllLinksByNodeId(automaton, 3);
    const result4 = findAllLinksByNodeId(automaton, 4);

    expect(result1).toHaveLength(2);
    expect(result1[0].name).toBe('Link 1');
    expect(result1[1].name).toBe('Link 3');

    expect(result2).toHaveLength(1);
    expect(result2[0].name).toBe('Link 2');

    expect(result3).toHaveLength(1);
    expect(result3[0].name).toBe('Link 4');

    expect(result4).toHaveLength(0);
  });
});
