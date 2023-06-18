import { describe, expect, test } from 'vitest';
import findLinkByNodeIdAndName from '.';

describe('findLinkByNodeIdAndName', () => {
  test('should find link by node ID and name', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1' },
        { id: 2, name: 'Node 2' },
        { id: 3, name: 'Node 3' }
      ],
      links: [
        { name: 'a', source: { id: 1 }, target: { id: 2 } },
        { name: 'c', source: { id: 2 }, target: { id: 3 } },
        { name: 'b', source: { id: 1 }, target: { id: 3 } }
      ]
    };

    const result1 = findLinkByNodeIdAndName(automaton, 1, 'a');
    const result2 = findLinkByNodeIdAndName(automaton, 2, 'b');
    const result3 = findLinkByNodeIdAndName(automaton, 3, 'c');
    const result4 = findLinkByNodeIdAndName(automaton, 1, 'Non-existent Link');
    const result5 = findLinkByNodeIdAndName(automaton, 2, 'c');

    expect(result1).not.toBeNull();
    expect(result1?.name).toBe('a');
    expect(result2).toBeNull();
    expect(result3).toBeNull();
    expect(result4).toBeNull();
    expect(result5).not.toBeNull();
  });
});
