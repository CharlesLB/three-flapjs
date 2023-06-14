import { LinkObject } from 'react-force-graph-2d';

const addLink = (automaton: IAutomaton, link: LinkObject) => {
  automaton.links.push(link);
  return automaton;
};

export default addLink;
