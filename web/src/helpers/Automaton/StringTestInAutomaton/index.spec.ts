import { describe, expect, test } from 'vitest';
import pe, { p } from '.';

describe('p', () => {
  test('should return the target node when a valid link is found', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' },
        { id: 3, name: 'q3' }
      ],
      links: [
        { source: { id: 1, name: 'q1' }, target: { id: 2, name: 'q2' }, name: 'a' },
        { source: { id: 2, name: 'q2' }, target: { id: 3, name: 'q3' }, name: 'b' }
      ]
    };

    const currentNode = { id: 1, name: 'q1' };
    const char = 'a';

    const result = p(automaton, currentNode, char);

    expect(result).toEqual({ id: 2, name: 'q2' });
  });

  test('should throw an error when no valid link is found', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' }
      ],
      links: [{ source: { id: 1 }, target: { id: 2 }, name: 'b' }]
    };

    const currentNode = { id: 1, name: 'q1' };
    const char = 'a';

    expect(() => p(automaton, currentNode, char)).toThrowError(
      'This word is not accepted in the automaton: There is no transition from q1 to the element a'
    );
  });
});

describe('pe', () => {
  test('should return the new current node when word length is 1', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' }
      ],
      links: [{ source: { id: 1, name: 'q1' }, target: { id: 2, name: 'q2' }, name: 'a' }]
    };

    const currentNode = { id: 1, name: 'q1' };
    const word = 'a';

    const result = pe(automaton, currentNode, word);

    expect(result).toEqual({ id: 2, name: 'q2' });
  });

  test('should return the new current node when word length is greater than 1', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1' },
        { id: 2, name: 'q2' }
      ],
      links: [{ source: { id: 1, name: 'q1' }, target: { id: 2, name: 'q2' }, name: 'a' }]
    };

    const currentNode = { id: 1, name: 'q1' };
    const word = 'abc';

    const result = pe(automaton, currentNode, word);

    expect(result).toEqual({ id: 2, name: 'q2' });
  });

  test('should call setNotTestPositionNode and setTestPositionNode', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'q1', testPosition: false },
        { id: 2, name: 'q2', testPosition: false }
      ],
      links: [{ source: { id: 1 }, target: { id: 2 }, name: 'a' }]
    };

    const currentNode = { id: 1, name: 'q1' };
    const word = 'a';

    pe(automaton, currentNode, word);

    expect(automaton.nodes[0].testPosition).toBe(false);
    expect(automaton.nodes[1].testPosition).toBe(true);
  });
});
