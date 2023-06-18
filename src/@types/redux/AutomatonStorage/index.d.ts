import { IAutomaton, ILink, INode } from '@/@types/components/Automaton';

interface IAutomatonStorage {
  mode: IAutomatonStorageMode;
  action: {
    type: 'save' | 'load' | 'export' | '';
    data?: IAutomaton | null;
  };
}

type IAutomatonStorageMode =
  | 'move'
  | 'delete'
  | 'node:create'
  | 'node:edit'
  | 'node:delete'
  | 'node:started'
  | 'node:end'
  | 'link:create'
  | 'link:edit'
  | 'link:delete'
  | 'none';
