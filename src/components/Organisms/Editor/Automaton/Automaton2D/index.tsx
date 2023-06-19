import { IAutomatonProps, ILink, INode } from '@/@types/components/Automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import deleteNode from '@/helpers/Automaton/Nodes/DeleteNode';
import editNode from '@/helpers/Automaton/Nodes/EditNode';
import dynamic from 'next/dynamic';
import React from 'react';
import { linkCanvasObject, nodeCanvasObject, nodeColor } from './utils';
import editLink from '@/helpers/Automaton/Links/EditLink';
import selectNode from '@/helpers/Automaton/Nodes/SelectNode';
import setEndNode from '@/helpers/Automaton/Nodes/SetEndNode';
import setStartNode from '@/helpers/Automaton/Nodes/SetStartNode';
import setNotEndNode from '@/helpers/Automaton/Nodes/SetNotEndNode';
import setNotStartNode from '@/helpers/Automaton/Nodes/SetNotStartNode';
import checkIfAutomatonIsAFD from '@/helpers/Automaton';
import deleteLink from '@/helpers/Automaton/Links/DeleteLink';
import setTestPositionNode from '@/helpers/Automaton/Nodes/SetTestPositionNode';
import setNotTestPositionNode from '@/helpers/Automaton/Nodes/SetNotTestPositionNode';
import setNotAllTestPositionNodes from '@/helpers/Automaton/Nodes/SetNotAllTestPositionNodes';
import { getAutomatonStorage } from '@/redux/slices/automatonStorageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { callModal } from '@/redux/slices/modalSlice';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
  const automatonStorage = useAppSelector(getAutomatonStorage);
  const selectedNode = data.nodes.find((node) => node.selected);
  const dispatch = useAppDispatch();

  const width = window.innerWidth - 220;

  const clickAdd = () => {
    setData(addNode({ ...data }));
  };
  const clickRemove = () => {
    setData(deleteNode({ ...data }, 3));
  };
  const clickEdita = () => {
    setData(editNode({ ...data }, 1, 'banana'));
  };

  const clickAddLink = () => {
    setData(addLink({ ...data }, 2, 2, 'b'));
  };

  const clickEditLink = () => {
    setData(editLink({ ...data }, 0, 0, 'b'));
  };

  const clickDeleteLink = () => {
    setData(deleteLink({ ...data }, 0, 0));
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

  const clickSetPositionNode = () => {
    setData(setTestPositionNode({ ...data }, 0));
  };

  const clickSetNotPositionNode = () => {
    setData(setNotTestPositionNode({ ...data }, 0));
  };

  const clickSetAllNotPositionNode = () => {
    setData(setNotAllTestPositionNodes({ ...data }));
  };

  const clickCheckIfAutomatonIsAFD = () => {
    checkIfAutomatonIsAFD({ ...data });
  };

  const handleNodeClick = (node: INode) => {
    switch (automatonStorage.mode) {
      case 'node:create':
        setData(addNode({ ...data }));
        break;
      case 'node:edit':
        dispatch(
          callModal({
            type: 'node:edit',
            data: {
              node: {
                id: node.id,
                name: node.name,
                start: node.start,
                end: node.end
              }
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
                setData(addLink({ ...data }, selectedNode.id, node?.id, name));
              }
            })
          );
          return;
        }

        //@ts-ignore
        setData(selectNode({ ...data }, node?.id));

        break;
      default:
        break;
    }
  };

  const handleLinkClick = (link: ILink) => {
    switch (automatonStorage.mode) {
      case 'link:edit':
        dispatch(
          callModal({
            type: 'link:edit',
            data: {
              link: {
                id: link.id,
                source: link.source,
                target: link.target,
                label: link.label
              }
            }
          })
        );
        break;
      case 'link:delete':
        //@ts-ignore
        setData(deleteLink({ ...data }, link?.source, link?.target));
        break;
      default:
        break;
    }
  };

  const handleBackgroundClick = (_event: MouseEvent) => {
    switch (automatonStorage.mode) {
      case 'node:create':
        setData(addNode(data));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button onClick={() => clickAdd()}>Add</button>
      <button onClick={() => clickRemove()}>Remove</button>
      <button onClick={() => clickEdita()}>Edita</button>
      <button onClick={() => clickAddLink()}>Add Link</button>
      <button onClick={() => clickEditLink()}>Edit Link</button>
      <button onClick={() => clickDeleteLink()}>Delete Link</button>
      {/* <button onClick={() => clickSelectNode()}>Select Node</button>
      <button onClick={() => clickDeselectNode()}>Deselect Node</button>
      <button onClick={() => clickDeselectAllNode()}>Deselect All Nodes</button> */}
      <button onClick={() => clickSetStartNode()}>Set start node</button>
      <button onClick={() => clickSetEndNode()}>Set end node</button>
      <button onClick={() => clickSetNotEndNode()}>Set NOT end node</button>
      <button onClick={() => clickSetNotStartNode()}>Set NOT start node</button>
      <button onClick={() => clickSetPositionNode()}>Set Position node</button>
      <button onClick={() => clickSetNotPositionNode()}>Set NOT Position node</button>
      <button onClick={() => clickSetAllNotPositionNode()}>Set All NOT Position node</button>
      <button onClick={() => clickCheckIfAutomatonIsAFD()}>AFD</button>

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
        cooldownTicks={0}
        onNodeDragEnd={(node) => {
          node.fx = node.x;
          node.fy = node.y;
        }}
        onBackgroundClick={(data) => handleBackgroundClick(data)}
        onNodeClick={(node) => handleNodeClick(node)}
        onLinkClick={(link) => handleLinkClick(link)}
        minZoom={2}
        maxZoom={4}
      />
    </>
  );
};

export default Automaton2D;
