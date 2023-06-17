import { IAutomaton } from '@/@types/components/Automaton';
import findNodeById from '../../Nodes/FindNodeById';
import findLinkByNodesId from '../FindLinkByNodesId';

const editLink = (automaton: IAutomaton, idNodeSource: number, idNodeTarget: number, name: string): IAutomaton => {
  const nodeSource = findNodeById(automaton, idNodeSource);
  if (!nodeSource) {
    throw new Error('Não existe nó cabeça com esse ID');
  }

  const nodeTarget = findNodeById(automaton, idNodeTarget);
  if (!nodeTarget) {
    throw new Error('Não existe nó cauda com esse ID');
  }

  const link = findLinkByNodesId(automaton, nodeSource, nodeTarget);

  if (!link) {
    throw new Error('Não existe link com esses ids');
  }

  for (let i = 0; i < link?.name.length; i++) {
    const splitName = link?.name.split(', ');
    if (splitName[i] == name) {
      console.log(splitName[i], name);
      return automaton;
    }
  }

  //@ts-ignore
  link.name = `${link?.name}, ${name}`;

  return automaton;
};

export default editLink;
