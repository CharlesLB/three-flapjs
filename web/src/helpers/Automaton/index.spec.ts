import { beforeEach, describe, expect, it } from 'vitest';
import checkIfAutomatonIsAFD, { checkIfAllNamesLinksByNodeAreDifferents, checkIfNotIsolatedStateExists, checkIfStartStateExists } from '.';

describe('Automaton Validation', () => {
  let automaton: any;

  beforeEach(() => {
    automaton = {
      nodes: [
        { id: 1, name: 'q1', start: true, end: false },
        { id: 2, name: 'q2', start: false, end: false },
        { id: 3, name: 'q3', start: false, end: true },
        { id: 4, name: 'q4', start: false, end: false }
      ],
      links: [
        { name: 'a', source: { id: 1, name: 'q1' }, target: { id: 2, name: 'q2' } },
        { name: 'b', source: { id: 1, name: 'q1' }, target: { id: 3, name: 'q3' } },
        { name: 'a', source: { id: 2, name: 'q2' }, target: { id: 4, name: 'q4' } },
        { name: 'b', source: { id: 4, name: 'q4' }, target: { id: 3, name: 'q3' } }
      ]
    };
  });

  describe('checkIfStartStateExists', () => {
    it('should return true if there is a start state in the automaton', () => {
      const result = checkIfStartStateExists(automaton);
      expect(result).toBe(true);
    });

    it('should return false if there is no start state in the automaton', () => {
      automaton.nodes[0].start = false;

      const result = checkIfStartStateExists(automaton);
      expect(result).toBe(false);
    });
  });

  describe('checkIfNotIsolatedStateExists', () => {
    it('should return true if there are no isolated states in the automaton', () => {
      const result = checkIfNotIsolatedStateExists(automaton);
      expect(result).toBe(true);
    });

    it('should return false if there is an isolated state in the automaton', () => {
      // @ts-ignore
      automaton.links = automaton.links.filter((link) => link.source.id !== 1);

      const result = checkIfNotIsolatedStateExists(automaton);
      expect(result).toBe(false);
    });
  });

  describe('checkIfAllNamesLinksByNodeAreDifferents', () => {
    it('should return true if all names of links by node are different', () => {
      const result = checkIfAllNamesLinksByNodeAreDifferents(automaton);
      expect(result).toBe(true);
    });

    it('should return false if there are duplicate names of links by node', () => {
      automaton.links.push({ name: 'a', source: { id: 1, name: 'q1' }, target: { id: 4, name: 'q4' } });
      automaton.links.push({ name: 'a', source: { id: 1, name: 'q1' }, target: { id: 3, name: 'q4' } });

      const result = checkIfAllNamesLinksByNodeAreDifferents(automaton);
      expect(result).toBe(false);
    });
  });

  describe('checkIfAutomatonIsAFD', () => {
    it('should return true if the automaton is an AFD', () => {
      const result = checkIfAutomatonIsAFD(automaton);
      expect(result).toBe(true);
    });

    it('should throw an error if there is no start state', () => {
      automaton.nodes[0].start = false;

      expect(() => {
        checkIfAutomatonIsAFD(automaton);
      }).toThrow('Its not AFD: There is no initial state');
    });

    it('should throw a success if there is no end state', () => {
      automaton.nodes[2].end = false;

      expect(() => {
        checkIfAutomatonIsAFD(automaton);
      }).toBeTruthy();
    });

    it('should throw an error if there is an isolated state', () => {
      // @ts-ignore
      automaton.links = automaton.links.filter((link) => link.source.id !== 1);

      expect(() => {
        checkIfAutomatonIsAFD(automaton);
      }).toThrow('Its not AFD: There is isolated state');
    });

    it('should throw an error if there are duplicate names of links by node', () => {
      automaton.links.push({ name: 'a', source: { id: 1, name: 'q1' }, target: { id: 4, name: 'q4' } });

      expect(() => {
        checkIfAutomatonIsAFD(automaton);
      }).toThrow('Its not AFD: Exists Names Links Of Node Equals');
    });
  });
});
