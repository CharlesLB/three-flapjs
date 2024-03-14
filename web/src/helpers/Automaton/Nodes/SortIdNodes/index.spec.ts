import { expect, test } from 'vitest';
import sortIdNodes from '.';

test('sortIdNodes should sort nodes in ascending order by id', () => {
  const automaton = {
    nodes: [
      { id: '3', name: 'C' },
      { id: '1', name: 'A' },
      { id: '2', name: 'B' }
    ],
    links: [
      { source: '1', target: '2', label: 'Transition' },
      { source: '2', target: '3', label: 'Transition' }
    ]
  };

  sortIdNodes(automaton);
  expect(automaton.nodes.map((node) => node.id)).toEqual(['1', '2', '3']);
});
