import { describe, test, expect, beforeEach } from 'vitest';
import addLink, { addDataToLink } from '.';

describe('addLink', () => {
  test('should add a new link without curvature', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const updatedAutomaton = addLink(automaton, 1, 2, 'Link AB');

    expect(updatedAutomaton.links).toEqual([
      {
        source: { id: 1, name: 'A', selected: false },
        target: { id: 2, name: 'B', selected: false },
        name: 'Link AB'
      }
    ]);
  });

  test('should add a new link with curvature', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const updatedAutomaton = addLink(automaton, 2, 1, 'Link BA');
    const updatedAutomaton2 = addLink(updatedAutomaton, 1, 2, 'Link AB');

    expect(updatedAutomaton2.links).toEqual([
      {
        source: { id: 2, name: 'B', selected: false },
        target: { id: 1, name: 'A', selected: false },
        name: 'Link BA',
        curvature: 0.3
      },
      {
        source: { id: 1, name: 'A', selected: false },
        target: { id: 2, name: 'B', selected: false },
        name: 'Link AB',
        curvature: 0.3
      }
    ]);
  });

  test('should add data to an existing link', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [
        {
          source: { id: 1, name: 'A' },
          target: { id: 2, name: 'B' },
          name: 'a'
        }
      ]
    };

    const updatedAutomaton = addLink(automaton, 1, 2, 'b');

    expect(updatedAutomaton.links).toEqual([
      {
        source: { id: 1, name: 'A' },
        target: { id: 2, name: 'B' },
        name: 'a, b'
      }
    ]);
  });

  test('should throw an error when the source node ID does not exist', () => {
    const automaton = {
      nodes: [],
      links: []
    };

    expect(() => {
      addLink(automaton, 1, 2, 'Link AB');
    }).toThrow('There is no head node with this ID');
  });

  test('should throw an error when the target node ID does not exist', () => {
    const automaton = {
      nodes: [{ id: 1, name: 'A' }],
      links: []
    };

    expect(() => {
      addLink(automaton, 1, 2, 'Link AB');
    }).toThrow('There is no tail node with this ID');
  });
});

describe('addDataToLink', () => {
  let automaton: any;

  beforeEach(() => {
    automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' }
      ],
      links: [
        { source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'a, b, c' },
        { source: { id: 3, name: 'C' }, target: { id: 4, name: 'D' }, name: 'x, y, z' }
      ]
    };
  });

  const nodeSource = { id: 1 };
  const nodeTarget = { id: 2 };

  test('should add new names to the existing link', () => {
    const updatedAutomaton = addDataToLink(automaton, nodeSource, nodeTarget, 'd, e');
    expect(updatedAutomaton.links[0].name).toBe('a, b, c, d, e');
  });

  test('should not modify the link if the names already exist', () => {
    const updatedAutomaton = addDataToLink(automaton, nodeSource, nodeTarget, 'b, c');
    expect(updatedAutomaton.links[0].name).toBe('a, b, c');
  });

  test('should not modify the automaton if the link does not exist', () => {
    const nonExistentLinkAutomaton = addDataToLink(automaton, { id: 10 }, { id: 20 }, 'd, e');
    expect(nonExistentLinkAutomaton).toBe(automaton);
  });
});
