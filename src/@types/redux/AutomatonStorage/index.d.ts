import { LinkObject as LinkObject2d, NodeObject } from 'react-force-graph-2d';
import { LinkObject as LinkObject3d } from 'react-force-graph-3d';
import { NodeObject as NodeObject2d } from 'react-force-graph-2d';
import { NodeObject as NodeObject3d } from 'react-force-graph-3d';

interface IAutomatonStorage {
  mode: 'remove' | 'add' | 'edit' | 'move' | 'setStarter' | 'setFinisher' | 'none';
  link: LinkObject2d | LinkObject3d | null;
  node: NodeObject2d | NodeObject3d | null;
}
