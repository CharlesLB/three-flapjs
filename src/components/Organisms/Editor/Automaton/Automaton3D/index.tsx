import { IAutomatonProps } from '@/@types/components/Automaton';
import dynamic from 'next/dynamic';
import React from 'react';
import { LinkObject, NodeObject } from 'react-force-graph-3d';

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false });
import SpriteText from 'three-spritetext';

const Automaton3D: React.FC<IAutomatonProps> = ({ data }) => {
  const width = window.innerWidth - 220;

  return (
    <ForceGraph3D
      graphData={data}
      nodeLabel="id"
      width={width}
      backgroundColor="#313638"
      nodeAutoColorBy="group"
      nodeThreeObjectExtend={true}
      nodeColor="#000"
      nodeThreeObject={(node: NodeObject) => {
        const sprite = new SpriteText(`${node?.name}`);
        sprite.color = '#fff';
        sprite.textHeight = 4;
        return sprite;
      }}
      linkThreeObjectExtend={true}
      linkThreeObject={(link: LinkObject) => {
        const sprite = new SpriteText(link.name);
        sprite.color = '#fff';
        sprite.textHeight = 1.5;
        return sprite;
      }}
      linkPositionUpdate={(sprite, { start, end }) => {
        const middlePos = Object.assign(
          // @ts-ignore
          ...['x', 'y', 'z'].map((c) => ({
            // @ts-ignore
            [c]: start[c] + 1.6 + (end[c] - start[c]) / 2
          }))
        );

        Object.assign(sprite.position, middlePos);
      }}
      linkDirectionalParticleSpeed={0.01}
      linkDirectionalParticleResolution={5}
      linkCurvature="curvature"
      linkDirectionalArrowLength={5}
      linkCurveRotation="rotation"
      linkDirectionalParticles={2}
      onNodeDragEnd={(node) => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      }}
    />
  );
};

export default Automaton3D;
