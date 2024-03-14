import { describe, expect, test } from 'vitest';
import { cleanAutomaton, validateAutomaton } from '.';

describe('validateAutomaton', () => {
  test('should return true for a valid automaton', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB' }]
    };

    const result = validateAutomaton(automaton);

    expect(result).toBe(true);
  });

  test('should return true for an automaton without nodes', () => {
    const automaton = {
      nodes: [],
      links: []
    };

    const result = validateAutomaton(automaton);

    expect(result).toBe(true);
  });

  test('should return true for an automaton without links', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: []
    };

    const result = validateAutomaton(automaton);

    expect(result).toBe(true);
  });
});

describe('cleanAutomaton', () => {
  test('should return a clean copy of the automaton', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, name: 'Link AB', curvature: 0.3, rotation: 0.5 }]
    };

    const result = cleanAutomaton(automaton);

    expect(result).toEqual({
      nodes: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
      ],
      links: [{ name: 'Link AB', source: { id: 1, name: 'A' }, target: { id: 2, name: 'B' }, curvature: 0.3, rotation: 0.5 }]
    });
    expect(result).not.toBe(automaton);
    expect(result.nodes[0]).not.toBe(automaton.nodes[0]);
    expect(result.links[0]).not.toBe(automaton.links[0]);
  });
});
