import { IAutomaton } from '@/@types/components/Automaton';
import { isArray, isNil } from 'lodash';

const validateAutomaton = (automaton: IAutomaton): boolean => {
  if (!automaton || typeof automaton !== 'object') {
    return false;
  }

  if (!isArray(automaton.nodes) || !isArray(automaton.links)) {
    return false;
  }

  const nodesValid = automaton.nodes.every((node) => {
    return !(isNil(node.id) || isNil(node.name));
  });

  const linksValid = automaton.links.every((link) => {
    return !(isNil(link.name) || isNil(link.source) || isNil(link.target));
  });

  return nodesValid && linksValid;
};

const cleanAutomaton = (automaton: IAutomaton): IAutomaton => {
  const nodes = automaton.nodes.map((node) => {
    return {
      id: node.id,
      name: node.name,
      start: node.start,
      end: node.end
    };
  });

  const links = automaton.links.map((link) => {
    return {
      name: link.name,
      source: {
        // @ts-ignore
        id: link.source?.id,
        // @ts-ignore
        name: link.source?.name
      },
      target: {
        // @ts-ignore
        id: link.target?.id,
        // @ts-ignore
        name: link.target?.name
      },
      curvature: link?.curvature,
      rotation: link?.rotation
    };
  });

  return {
    nodes,
    links
  };
};

export { validateAutomaton, cleanAutomaton };
