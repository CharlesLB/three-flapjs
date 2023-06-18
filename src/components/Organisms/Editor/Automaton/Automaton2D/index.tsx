import { IAutomatonProps } from '@/@types/components/Automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import deleteNode from '@/helpers/Automaton/Nodes/DeleteNode';
import editNode from '@/helpers/Automaton/Nodes/EditNode';
import dynamic from 'next/dynamic';
import React from 'react';
import { linkCanvasObject, nodeCanvasObject, nodeColor } from './utils';
import editLink from '@/helpers/Automaton/Links/EditLink';
import selectNode from '@/helpers/Automaton/Nodes/SelectNode';
import deselectNode from '@/helpers/Automaton/Nodes/DeselectNode';
import deselectAllNodes from '@/helpers/Automaton/Nodes/DeselectAllNodes';
import setEndNode from '@/helpers/Automaton/Nodes/SetEndNode';
import setStartNode from '@/helpers/Automaton/Nodes/SetStartNode';
import setNotEndNode from '@/helpers/Automaton/Nodes/SetNotEndNode';
import setNotStartNode from '@/helpers/Automaton/Nodes/SetNotStartNode';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
  const width = window.innerWidth - 220;

  const clickAdd = () => {
    setData(addNode({ ...data }));
  };
  const clickRemove = () => {
    setData(deleteNode({ ...data }, 1));
  };
  const clickEdita = () => {
    setData(editNode({ ...data }, 1, 'banana'));
  };

  // const clickAddLink = () => {
  //   setData(addLink({ ...data }, 0, 1, 'a'));
  // };

  const clickAddLink = () => {
    setData(addLink({ ...data }, 1, 2, 'a'));
  };

  const clickEditLink = () => {
    setData(editLink({ ...data }, 1, 2, 'b'));
  };

  const clickSelectNode = () => {
    setData(selectNode({ ...data }, 2));
  };

  const clickDeselectNode = () => {
    setData(deselectNode({ ...data }, 1));
  };

  const clickDeselectAllNode = () => {
    setData(deselectAllNodes({ ...data }));
  };

  const clickSetEndNode = () => {
    setData(setEndNode({ ...data }, 2));
  };

  const clickSetStartNode = () => {
    setData(setStartNode({ ...data }, 0));
  };

  const clickSetNotEndNode = () => {
    setData(setNotEndNode({ ...data }, 2));
  };

  const clickSetNotStartNode = () => {
    setData(setNotStartNode({ ...data }, 0));
  };

  return (
    <>
      <button onClick={() => clickAdd()}>Add</button>
      <button onClick={() => clickRemove()}>Remove</button>
      <button onClick={() => clickEdita()}>Edita</button>
      <button onClick={() => clickAddLink()}>Add Link</button>
      <button onClick={() => clickEditLink()}>Edit Link</button>
      <button onClick={() => clickSelectNode()}>Select Node</button>
      <button onClick={() => clickDeselectNode()}>Deselect Node</button>
      <button onClick={() => clickDeselectAllNode()}>Deselect All Nodes</button>
      <button onClick={() => clickSetStartNode()}>Set start node</button>
      <button onClick={() => clickSetNotEndNode()}>Set end node</button>
      <button onClick={() => clickSetNotEndNode()}>Set NOT end node</button>
      <button onClick={() => clickSetNotStartNode()}>Set NOT start node</button>
      <ForceGraph2D
        graphData={data}
        nodeLabel="id"
        width={width}
        backgroundColor="#31363800"
        nodeAutoColorBy="group"
        nodeColor={nodeColor}
        nodeRelSize={8}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={nodeCanvasObject}
        linkHoverPrecision={1}
        linkCanvasObjectMode={() => 'after'}
        linkAutoColorBy="group"
        linkCanvasObject={(link, ctx, globalScale) => linkCanvasObject(link, ctx, globalScale, data.nodes)}
        linkWidth={1}
        linkColor="#aaa"
        linkDirectionalParticleSpeed={0.01}
        linkDirectionalArrowLength={5}
        linkCurvature="curvature"
        linkDirectionalParticles={2}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
        }}
        onBackgroundClick={(data) => console.log(data)}
        minZoom={2}
        maxZoom={4}
      />
    </>
  );
};

export default Automaton2D;
