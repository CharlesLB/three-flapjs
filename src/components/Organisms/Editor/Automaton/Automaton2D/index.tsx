import { IAutomatonProps } from '@/@types/components/Automaton';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import dynamic from 'next/dynamic';
import React from 'react';
import { linkCanvasObject, nodeCanvasObject } from './utils';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
  const width = window.innerWidth - 220;

  const click = () => {
    setData(addNode({ ...data }));
  };

  return (
    <>
      <button onClick={() => click()}>test</button>
      <ForceGraph2D
        graphData={data}
        nodeLabel="id"
        width={width}
        backgroundColor="#313638"
        nodeAutoColorBy="group"
        nodeColor="#000"
        nodeRelSize={20}
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={nodeCanvasObject}
        linkHoverPrecision={1}
        linkCanvasObjectMode={() => 'after'}
        linkAutoColorBy="group"
        linkCanvasObject={linkCanvasObject}
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
      />
    </>
  );
};

export default Automaton2D;
