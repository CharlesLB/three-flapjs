import { describe, expect, test } from 'vitest';
import checkExistsLinkByNodeId from '.';

describe('checkExistsLinkByNodeId', () => {
  test('should return true if a link exists with the given node ID', () => {
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

    const result1 = checkExistsLinkByNodeId(automaton, 1);
    const result2 = checkExistsLinkByNodeId(automaton, 2);
    const result3 = checkExistsLinkByNodeId(automaton, 3);
    const result4 = checkExistsLinkByNodeId(automaton, 4);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(true);
    expect(result4).toBe(false);
  });
});
