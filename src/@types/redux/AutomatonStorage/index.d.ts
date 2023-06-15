import { ILink, INode } from '@/@types/components/Automaton';

interface IAutomatonStorage {
  mode: 'remove' | 'add' | 'edit' | 'move' | 'setStarter' | 'setFinisher' | 'none';
  link: ILink | null;
  node: INode | null;
}
