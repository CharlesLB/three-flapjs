import { IAutomatonProps } from '@/@types/components/Automaton';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import editNode from '@/helpers/Automaton/Nodes/EditNode';
import dynamic from 'next/dynamic';
import React from 'react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
  const width = window.innerWidth - 220;

  const click = () => {
    // setData(addNode({ ...data }));
    setData(editNode({ ...data }, 0, 'q6'));
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
        nodeCanvasObjectMode={() => 'after'}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = `${node?.id}`;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;

          ctx.fillStyle = 'rgba(255, 255, 255)';

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = node.color || '#000';
          ctx.fillText(label, node?.x || 0, node?.y || 0);
        }}
        linkHoverPrecision={1}
        linkCanvasObjectMode={() => 'after'}
        linkAutoColorBy="group"
        linkCanvasObject={(link, ctx, globalScale) => {
          const label = `${link?.name}`;
          const start = link.source;
          const end = link.target;
          const textPos = Object.assign(
            // @ts-ignore
            ...['x', 'y'].map((c) => ({
              // @ts-ignore
              [c]: start[c] + (end[c] - start[c]) / 2
            }))
          );

          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;

          ctx.fillStyle = 'rgba(255, 255, 255)';
          const { x: textX, y: textY } = textPos;
          ctx.fillText(label, textX, textY);
        }}
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
