import { IAutomaton } from '@/@types/components/Automaton';

const validateAutomaton = (automaton: IAutomaton): boolean => {
  if (!automaton || typeof automaton !== 'object') {
    return false;
  }

  if (!Array.isArray(automaton.nodes) || !Array.isArray(automaton.links)) {
    return false;
  }

  const nodesValid = automaton.nodes.every((node) => {
    return node.id !== null && node.id !== undefined && node.name !== null && node.name !== undefined;
  });

  const linksValid = automaton.links.every((link) => {
    return (
      link.name !== null &&
      link.name !== undefined &&
      link.source !== null &&
      link.source !== undefined &&
      link.target !== null &&
      link.target !== undefined
    );
  });

  return nodesValid && linksValid;
};

const cleanAutomaton = (automaton: IAutomaton): IAutomaton => {
  const nodes = automaton.nodes.map((node) => {
    return {
      id: node.id,
      name: node.name
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
