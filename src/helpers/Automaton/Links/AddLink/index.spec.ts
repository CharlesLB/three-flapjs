import { describe, test, expect } from 'vitest';
import addLink from '.';

describe('addLink', () => {
  // test('should add a new link without curvature', () => {
  //   const automaton = {
  //     nodes: [
  //       { id: 1, name: 'A' },
  //       { id: 2, name: 'B' }
  //     ],
  //     links: []
  //   };

  //   const updatedAutomaton = addLink(automaton, 1, 2, 'Link AB');

  //   expect(updatedAutomaton.links).toEqual([
  //     {
  //       source: { id: 1, name: 'A' },
  //       target: { id: 2, name: 'B' },
  //       name: 'Link AB'
  //     }
  //   ]);
  // });

  // test('should add a new link with curvature', () => {
  //   const automaton = {
  //     nodes: [
  //       { id: 1, name: 'A' },
  //       { id: 2, name: 'B' }
  //     ],
  //     links: []
  //   };

  //   const updatedAutomaton = addLink(automaton, 2, 1, 'Link BA');
  //   const updatedAutomaton2 = addLink(updatedAutomaton, 1, 2, 'Link AB');

  //   expect(updatedAutomaton2.links).toEqual([
  //     {
  //       source: { id: 2, name: 'B' },
  //       target: { id: 1, name: 'A' },
  //       name: 'Link BA',
  //       curvature: 0.3
  //     },
  //     {
  //       source: { id: 1, name: 'A' },
  //       target: { id: 2, name: 'B' },
  //       name: 'Link AB',
  //       curvature: 0.3
  //     }
  //   ]);
  // });

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

    console.log(updatedAutomaton);

    expect(updatedAutomaton.links).toEqual([
      {
        source: { id: 1, name: 'A' },
        target: { id: 2, name: 'B' },
        name: 'a, b'
      }
    ]);
  });

  // test('should throw an error when the source node ID does not exist', () => {
  //   const automaton = {
  //     nodes: [],
  //     links: []
  //   };

  //   expect(() => {
  //     addLink(automaton, 1, 2, 'Link AB');
  //   }).toThrow('Não existe nó cabeça com esse ID');
  // });

  // test('should throw an error when the target node ID does not exist', () => {
  //   const automaton = {
  //     nodes: [{ id: 1, name: 'A' }],
  //     links: []
  //   };

  //   expect(() => {
  //     addLink(automaton, 1, 2, 'Link AB');
  //   }).toThrow('Não existe nó cauda com esse ID');
  // });
});
