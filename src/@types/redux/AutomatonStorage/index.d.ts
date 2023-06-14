interface IAutomatonStorage {
  mode: 'remove' | 'add' | 'edit' | 'move' | 'setStarter' | 'setFinisher' | 'none';
  link: LinkObject | null;
  node: NodeObject | null;
}
