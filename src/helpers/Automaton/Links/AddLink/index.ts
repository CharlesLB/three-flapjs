import { IAutomaton, INode } from '@/@types/components/Automaton';
import findNodeById from '../../Nodes/FindNodeById';
import findLinkByNodeId from '../FindLinkByNodesId';

const addDataToCreatedLink = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode, name: string): IAutomaton => {
  const link = automaton.links.find((link) => link.source === nodeSource && link.target === nodeTarget);

  for (let i = 0; i < link?.name.length; i++) {
    if (link?.name[i] == name) {
      return automaton;
    }
  }

  //@ts-ignore
  link.name = `${link?.name}, ${name}`;

  return automaton;
};

const getLinkExists = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode): ILink => {
  const link = findLinkByNodeId(automaton, nodeSource, nodeTarget);

  if (!link) {
    throw new Error('Não existe link com esses nós');
  }

  return link;
};

const createLinkWithCurvature = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode, name: string): IAutomaton => {
  const link = getLinkExists(automaton, nodeTarget, nodeSource);
  link.curvature = 0.3;

  return {
    ...automaton,
    links: [
      ...automaton.links,
      {
        source: nodeSource,
        target: nodeTarget,
        name: name,
        curvature: 0.3
      }
    ]
  };
};

const createLinkWithoutCurvature = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode, name: string): IAutomaton => {
  return {
    ...automaton,
    links: [
      ...automaton.links,
      {
        source: nodeSource,
        target: nodeTarget,
        name: name
      }
    ]
  };
};

const verifyLinkExists = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode): boolean => {
  const link = findLinkByNodeId(automaton, nodeSource, nodeTarget);

  return !!link;
};

const createLink = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode, name: string): IAutomaton => {
  if (nodeSource.id === nodeTarget.id) {
    return {
      ...automaton,
      links: [
        ...automaton.links,
        {
          source: nodeSource,
          target: nodeTarget,
          name: name,
          curvature: 0.8,
          rotation: (Math.PI * 1) / 6
        }
      ]
    };
  }

  const newAtomaton = verifyLinkExists(automaton, nodeTarget, nodeSource)
    ? createLinkWithCurvature(automaton, nodeSource, nodeTarget, name)
    : createLinkWithoutCurvature(automaton, nodeSource, nodeTarget, name);

  return newAtomaton;
};

const addLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number, name: string): IAutomaton => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('Não existe nó cabeça com esse ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('Não existe nó cauda com esse ID');
  }

  const newAtomaton = verifyLinkExists(automaton, nodeSource, nodeTarget)
    ? addDataToCreatedLink(automaton, nodeSource, nodeTarget, name)
    : createLink(automaton, nodeSource, nodeTarget, name);

  return newAtomaton;
};

export default addLink;
