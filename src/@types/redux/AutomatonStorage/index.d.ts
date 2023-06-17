import { IAutomaton, ILink, INode } from '@/@types/components/Automaton';

interface IAutomatonStorage {
  mode: 'remove' | 'add' | 'edit' | 'move' | 'setStarter' | 'setFinisher' | 'none';
  action: {
    type: 'save' | 'load' | '';
    data?: IAutomaton | null;
  };
}
