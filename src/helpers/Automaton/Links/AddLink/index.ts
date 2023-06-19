import { IAutomaton, ILink, INode } from '@/@types/components/Automaton';
import findLinkByNodeId from '../FindLinkByNodesId';
import findNodeById from '../../Nodes/FindNodeById';
import deselectAllNodes from '../../Nodes/DeselectAllNodes';

const addDataToLink = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode, name: string): IAutomaton => {
  // @ts-ignore
  const link = automaton.links.find((link) => link.source?.id === nodeSource?.id && link.target?.id === nodeTarget?.id);

  if (!link) {
    return automaton;
  }

  if (link.name.includes(name)) {
    return automaton;
  }

  link.name = `${link.name}, ${name}`;

  return automaton;
};

const getLinkExists = (automaton: IAutomaton, nodeSource: INode, nodeTarget: INode): ILink => {
  const link = findLinkByNodeId(automaton, nodeSource, nodeTarget);

  if (!link) {
    throw new Error('There is no link with this ID');
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

  const newAutomaton = verifyLinkExists(automaton, nodeTarget, nodeSource)
    ? createLinkWithCurvature(automaton, nodeSource, nodeTarget, name)
    : createLinkWithoutCurvature(automaton, nodeSource, nodeTarget, name);

  return newAutomaton;
};

const addLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number, name: string): IAutomaton => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('There is no head node with this ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('There is no tail node with this ID');
  }

  const newAutomaton = verifyLinkExists(automaton, nodeSource, nodeTarget)
    ? addDataToLink(automaton, nodeSource, nodeTarget, name)
    : createLink(automaton, nodeSource, nodeTarget, name);

  const deselectedAllNodesAutomaton = deselectAllNodes(newAutomaton);

  return deselectedAllNodesAutomaton;
};

export default addLink;
