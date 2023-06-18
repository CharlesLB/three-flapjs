import { IAutomatonProps } from '@/@types/components/Automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';
import addNode from '@/helpers/Automaton/Nodes/AddNode';
import deleteNode from '@/helpers/Automaton/Nodes/DeleteNode';
import editNode from '@/helpers/Automaton/Nodes/EditNode';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { linkCanvasObject, nodeCanvasObject, nodeColor } from './utils';
import editLink from '@/helpers/Automaton/Links/EditLink';
import selectNode from '@/helpers/Automaton/Nodes/SelectNode';
import deselectNode from '@/helpers/Automaton/Nodes/DeselectNode';
import deselectAllNodes from '@/helpers/Automaton/Nodes/DeselectAllNodes';
import setEndNode from '@/helpers/Automaton/Nodes/SetEndNode';
import setStartNode from '@/helpers/Automaton/Nodes/SetStartNode';
import setNotEndNode from '@/helpers/Automaton/Nodes/SetNotEndNode';
import setNotStartNode from '@/helpers/Automaton/Nodes/SetNotStartNode';
import checkIfAutomatonIsAFD from '@/helpers/Automaton';
import deleteLink from '@/helpers/Automaton/Links/DeleteLink';
import stringTestInAutomaton from '@/helpers/Automaton/StringTestInAutomaton';
import getStartNode from '@/helpers/Automaton/Nodes/GetStartNode';
import pe from '@/helpers/Automaton/StringTestInAutomaton';
import setTestPositionNode from '@/helpers/Automaton/Nodes/SetTestPositionNode';
import setNotTestPositionNode from '@/helpers/Automaton/Nodes/SetNotTestPositionNode';
import setNotAllTestPositionNodes from '@/helpers/Automaton/Nodes/SetNotAllTestPositionNodes';

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false });

const Automaton2D: React.FC<IAutomatonProps> = ({ data, setData }) => {
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

  const clickTest = () => {
    const word = 'abb';
    let finish = false;
    let wordSlice = word;
    checkIfAutomatonIsAFD({ ...data });

    let currentNode = getStartNode({ ...data });
    if (!currentNode) {
      throw new Error('Its not AFD: There is no initial state');
    }
    //@ts-ignore
    setData(setTestPositionNode({ ...data }, currentNode.id));

    const func = setInterval(() => {
      if (wordSlice.length > 0) {
        console.log(`-Calculing Pe(${currentNode?.name}, ${wordSlice})`);
      } else {
        console.log(`Calculing Pe(${currentNode?.name}, ε) = ${currentNode?.name}`);
      }

      let newCurrentNode;
      if (wordSlice.length > 0) {
        //@ts-ignore
        newCurrentNode = pe({ ...data }, currentNode, wordSlice);
      } else {
        newCurrentNode = currentNode;
        finish = true;
      }

      setData({ ...data });
      wordSlice = wordSlice.slice(1, wordSlice.length);
      currentNode = newCurrentNode;

      if (finish) {
        if (!currentNode?.end) {
          console.log(`This '${word}' is not accepted in the automaton: The state ${currentNode?.name} not is final state`);
        }

        console.log(`This '${word}' is accepted in the automaton: The state ${currentNode?.name} is final state`);

        clearInterval(func);
      }
    }, 1000);
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
      <button onClick={() => clickTest()}>TEST</button>

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
