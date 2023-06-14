import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC = () => {
  const width = window.innerWidth - 220;
  const [data, setData] = useState<IAutomaton>({
    // @ts-ignore
    nodes: [...Array(3).keys()].map((i) => ({ id: i, name: i })),
    links: [
      { source: 0, target: 0, curvature: 0.8, name: 0, rotation: (Math.PI * 1) / 6 },
      { source: 0, target: 2, name: 0 }
    ]
  });

  return (
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
    />
  );
};

export default Automaton2D;
