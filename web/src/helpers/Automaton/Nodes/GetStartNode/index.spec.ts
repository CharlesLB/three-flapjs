import { describe, expect, it } from 'vitest';
import getStartNode from '.';

describe('getStartNode', () => {
  it('should return the start node', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', start: false },
        { id: 2, name: 'Node 2', start: true },
        { id: 3, name: 'Node 3', start: false }
      ],
      links: []
    };

    const startNode = getStartNode(automaton);

    expect(startNode).to.deep.equal({ id: 2, name: 'Node 2', start: true });
  });

  it('should return null if no start node exists', () => {
    const automaton = {
      nodes: [
        { id: 1, name: 'Node 1', start: false },
        { id: 2, name: 'Node 2', start: false },
        { id: 3, name: 'Node 3', start: false }
      ],
      links: []
    };

    const startNode = getStartNode(automaton);

    expect(startNode).to.be.null;
  });
});
