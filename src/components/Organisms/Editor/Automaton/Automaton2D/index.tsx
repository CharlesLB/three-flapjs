import { IAutomatonProps, ILink, INode } from '@/@types/components/Automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import deleteNode from '@/helpers/Automaton/Nodes/DeleteNode';
import dynamic from 'next/dynamic';
import React from 'react';
import { linkCanvasObject, nodeCanvasObject, nodeColor } from './utils';
import selectNode from '@/helpers/Automaton/Nodes/SelectNode';
import setEndNode from '@/helpers/Automaton/Nodes/SetEndNode';
import setStartNode from '@/helpers/Automaton/Nodes/SetStartNode';
import deleteLink from '@/helpers/Automaton/Links/DeleteLink';
import { getAutomatonStorage } from '@/redux/slices/automatonStorageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { callModal } from '@/redux/slices/modalSlice';
import deselectAllNodes from '@/helpers/Automaton/Nodes/DeselectAllNodes';
import editLink from '@/helpers/Automaton/Links/EditLink';
import editNode from '@/helpers/Automaton/Nodes/EditNode';
import { getPreferences } from '@/redux/slices/preferencesSlice';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
  const automatonStorage = useAppSelector(getAutomatonStorage);
  const preferences = useAppSelector(getPreferences);
  const selectedNode = data.nodes.find((node) => node.selected);
  const dispatch = useAppDispatch();

  const width = window.innerWidth - 220;

  const onNodeClick = (node: INode): void => {
    switch (automatonStorage.mode) {
      case 'node:create':
        setData(addNode({ ...data }));
        break;
      case 'node:edit':
        dispatch(
          callModal({
            type: 'node:edit',
            data: {
              name: node?.name,
              nodeNames: data.nodes.map((node) => node.name)
            },
            callback: (name: string) => {
              //@ts-ignore
              setData(editNode({ ...data }, node?.id, name));
            }
          })
        );
        break;
      case 'node:started':
        //@ts-ignore
        setData(setStartNode({ ...data }, node?.id));
        break;
      case 'node:end':
        //@ts-ignore
        setData(setEndNode({ ...data }, node?.id));
        break;
      case 'node:delete':
        //@ts-ignore
        setData(deleteNode({ ...data }, node?.id));
        break;
      case 'delete':
        //@ts-ignore
        setData(deleteNode({ ...data }, node?.id));
        break;
      case 'link:create':
        //@ts-ignore
        if (selectedNode) {
          dispatch(
            callModal({
              type: 'link:create',
              callback: (name: string) => {
                //@ts-ignore
                setData(deselectAllNodes(addLink({ ...data }, selectedNode.id, node?.id, name)));
              }
            })
          );

          setData;
          return;
        }

        //@ts-ignore
        setData(selectNode({ ...data }, node?.id));

        break;
      default:
        break;
    }
  };

  const onLinkClick = (link: ILink): void => {
    switch (automatonStorage.mode) {
      case 'link:edit':
        dispatch(
          callModal({
            type: 'link:edit',
            data: link?.name,
            callback: (name: string) => {
              //@ts-ignore
              setData(editLink({ ...data }, link?.source?.id, link?.target?.id, name));
            }
          })
        );
        break;
      case 'link:delete':
        //@ts-ignore
        setData(deleteLink({ ...data }, link?.source?.id, link?.target?.id));
        break;
      case 'delete':
        //@ts-ignore
        setData(deleteLink({ ...data }, link?.source?.id, link?.target?.id));
        break;
      default:
        break;
    }
  };

  const onBackgroundClick = (_event: MouseEvent): void => {
    switch (automatonStorage.mode) {
      case 'node:create':
        setData(addNode(data));
        break;
      case 'link:create':
        //@ts-ignore
        setData(deselectAllNodes({ ...data }));
      default:
        break;
    }
  };

  const onNodeDragEnd = (node: INode): void => {
    node.fx = node.x;
    node.fy = node.y;
  };

  return (
    <ForceGraph2D
      graphData={data}
      nodeLabel="id"
      width={width}
      backgroundColor="#31363800"
      nodeAutoColorBy="group"
      nodeColor={(node) => nodeColor(node, preferences.node.background)}
      nodeRelSize={8}
      nodeCanvasObjectMode={() => 'after'}
      nodeCanvasObject={(node, ctx, globalScale) => nodeCanvasObject(node, ctx, globalScale, preferences.node.color)}
      linkHoverPrecision={1}
      linkCanvasObjectMode={() => 'after'}
      linkAutoColorBy="group"
      linkCanvasObject={(link, ctx, globalScale) => linkCanvasObject(link, ctx, globalScale, data.nodes, preferences.link.color)}
      linkWidth={1}
      linkColor={() => preferences.link.background}
      linkDirectionalParticleSpeed={preferences.link.particlesSpeed / 1000}
      linkDirectionalArrowLength={5}
      linkCurvature="curvature"
      linkDirectionalParticles={preferences.link.particles ? 4 : 0}
      cooldownTicks={preferences.node.autoAdjust ? 100 : 0}
      onNodeDragEnd={onNodeDragEnd}
      onBackgroundClick={onBackgroundClick}
      onNodeClick={onNodeClick}
      onLinkClick={onLinkClick}
      minZoom={2}
      maxZoom={4}
    />
  );
};

export default Automaton2D;
