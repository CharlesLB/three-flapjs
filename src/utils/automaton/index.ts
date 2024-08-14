import { IAutomaton } from '@/@types/components/Automaton';
import { isArray, isNullish } from 'remeda';

const validateAutomaton = (automaton: IAutomaton): boolean => {
  if (!automaton || typeof automaton !== 'object') {
    return false;
  }

  if (!isArray(automaton.nodes) || !isArray(automaton.links)) {
    return false;
  }

  const nodesValid = automaton.nodes.every((node) => {
    return !(isNullish(node.id) || isNullish(node.name));
  });

  const linksValid = automaton.links.every((link) => {
    return !(isNullish(link.name) || isNullish(link.source) || isNullish(link.target));
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
