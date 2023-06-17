import { IAutomaton } from '@/@types/components/Automaton';
import { LinkObject } from 'react-force-graph-2d';
import findNodeById from '../../Nodes/FindNodeById';

const addLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number, name?: string) => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('Não existe nó cabeça com esse ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('Não existe nó cauda com esse ID');
  }

  automaton.links.push({
    source: nodeSource,
    target: nodeTarget,
    name: name
  });

  return automaton;
};

export default addLink;
