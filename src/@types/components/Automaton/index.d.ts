import { NodeObject as NodeObject2D } from 'react-force-graph-2d';
import { NodeObject as NodeObject3D } from 'react-force-graph-3d';
import { LinkObject as LinkObject2D } from 'react-force-graph-2d';
import { LinkObject as LinkObject3D } from 'react-force-graph-3d';

type INode = NodeObject2D | NodeObject3D;
type ILink = LinkObject2D | LinkObject3D;

interface IAutomaton {
  nodes: INode[];
  links: ILink[];
}

interface IAutomatonProps {
  data: IAutomaton;
  setData: (data: IAutomaton) => void;
}

type Coords = { x: number; y: number; z: number };
type LinkUpdateCoords = {
  start: Coords;
  end: Coords;
};
