import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content } from './styles';
import dynamic from 'next/dynamic';
import { IAutomaton, ILink, INode } from '@/@types/components/Automaton';
import useLog from '@/hooks/useLog';
import { getAutomatonStorage, resetAction } from '@/redux/slices/automatonStorageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IAutomatonStorage } from '@/@types/redux/AutomatonStorage';
import { downloadJsonByObject } from '@/utils/file';
import { cleanAutomaton } from '@/utils/automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';
import { getPreferences } from '@/redux/slices/preferencesSlice';
import checkIfAutomatonIsAFD from '@/helpers/Automaton';
import getStartNode from '@/helpers/Automaton/Nodes/GetStartNode';
import pe from '@/helpers/Automaton/StringTestInAutomaton';
import setTestPositionNode from '@/helpers/Automaton/Nodes/SetTestPositionNode';
import deselectAllNodes from '@/helpers/Automaton/Nodes/DeselectAllNodes';
import setNotAllTestPositionNodes from '@/helpers/Automaton/Nodes/SetNotAllTestPositionNodes';
import { BsFillTrashFill } from 'react-icons/bs';

const Automaton3D = dynamic(() => import('./Automaton3D'), { ssr: false });
const Automaton2D = dynamic(() => import('./Automaton2D'), { ssr: false });

const Automaton: React.FC = () => {
  const logger = useLog();
  const preferences = useAppSelector(getPreferences);
  const automatonStorage = useAppSelector(getAutomatonStorage);
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);
  const [linksToBeAdded, setLinksToBeAdded] = useState<ILink[]>([]);
  const [data, setData] = useState<IAutomaton>({
    nodes: [],
    links: []
  });

  const timer = preferences.timer;

  const getDataFromStorage = (): IAutomaton => {
    const previousData = localStorage.getItem('automaton');

    setTimeout(() => localStorage.removeItem('automaton'), timer);

    if (!previousData) {
      setLoading(false);
      return {
        nodes: [],
        links: []
      };
    }

    const parsedData = JSON.parse(previousData);

    return parsedData;
  };

  const updateAutomatonByNodes = (nodes: INode[]): void => {
    setData({
      nodes: [...nodes],
      links: []
    });
    setLoading(false);
  };

  const updateAutomatonByLinks = useCallback((): void => {
    const nextLinkToBeAdded = linksToBeAdded[0];

    setData(
      addLink(
        {
          ...data
        },
        // @ts-ignore
        nextLinkToBeAdded.source?.id,
        // @ts-ignore
        nextLinkToBeAdded.target?.id,
        nextLinkToBeAdded.name
      )
    );

    setLinksToBeAdded(linksToBeAdded.slice(1));
  }, [data]);

  const getPreviousData = (): void => {
    const previousData = getDataFromStorage();

    updateAutomatonByNodes(previousData.nodes);

    setLinksToBeAdded(previousData.links);
  };

  const updateDataByNewObject = (newObject: IAutomaton): void => {
    const newData = {
      nodes: [...newObject.nodes],
      links: [...newObject.links]
    };

    localStorage.setItem('automaton', JSON.stringify(newObject));

    window.location.reload();

    setData(newData);
  };

  const runTest = (word: string): void => {
    try {
      const log = (data: string) => {
        logger.logInfo(data, true);
      };

      setData(deselectAllNodes({ ...data }));

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
          log(`Calculating Pe(${currentNode?.name}, ${wordSlice})`);
        } else {
          log(`Calculating Pe(${currentNode?.name}, ε) = ${currentNode?.name}`);
        }

        let newCurrentNode;
        if (wordSlice.length > 0) {
          try {
            //@ts-ignore
            newCurrentNode = pe({ ...data }, currentNode, wordSlice, log);
          } catch (e) {
            logger.logError(`${e}`);
            setData(setNotAllTestPositionNodes({ ...data }));
            clearInterval(func);
          }
        } else {
          newCurrentNode = currentNode;
          finish = true;
        }

        setData({ ...data });
        wordSlice = wordSlice.slice(1, wordSlice.length);
        //@ts-ignore
        currentNode = newCurrentNode;

        if (finish) {
          if (!currentNode?.end) {
            logger.logError(`This '${word}' is not accepted in the automaton: The state ${currentNode?.name} not is final state`);
          } else {
            logger.logSuccess(`This '${word}' is accepted in the automaton: The state ${currentNode?.name} is final state`);
          }

          setData(setNotAllTestPositionNodes({ ...data }));
          clearInterval(func);
        }
      }, timer);
    } catch (error: any) {
      logger.logError(error?.message);
    }
  };

  const actions = (action: IAutomatonStorage['action']): void => {
    const load = (): void => {
      setLoading(true);

      if (!action.data) {
        setData({
          nodes: [],
          links: []
        });

        logger.logInfo('Your automaton is empty or in a invalid Type.');
        return;
      }

      updateDataByNewObject(action.data as IAutomaton);
    };

    const exportData = (): void => {
      downloadJsonByObject(cleanAutomaton(data), 'automaton');
      logger.logInfo('Your automaton has been downloaded.');
    };

    const save = (): void => {
      localStorage.setItem('automaton', JSON.stringify(cleanAutomaton(data)));
      logger.logInfo('Your automaton has been saved.');
    };

    switch (action.type) {
      case 'load':
        load();
        break;
      case 'save':
        save();
        break;
      case 'export':
        exportData();
        break;
      case 'test':
        if (typeof action.data === 'string') runTest(action.data as string);
        break;
      default:
        break;
    }

    dispatch(resetAction());
  };

  const clearAutomaton = (): void => {
    setData({
      nodes: [],
      links: []
    });
  };

  useEffect(() => {
    if (!automatonStorage.action.type) return;

    actions(automatonStorage.action);
  }, [automatonStorage.action]);

  useEffect(() => {
    if (!loading) return;
    getPreviousData();
  }, []);

  useEffect(() => {
    if (linksToBeAdded.length === 0) {
      return;
    }

    if (linksToBeAdded.length > 0 && data.nodes.length > 0) {
      updateAutomatonByLinks();
      setLoading(false);
    }
  }, [linksToBeAdded]);

  return (
    <Container id="automaton">
      <header>
        <a onClick={() => clearAutomaton()} title="Clear logs">
          <BsFillTrashFill color="#ccc" size={16} />
        </a>
      </header>
      <Content>
        {
          {
            '2d': <Automaton2D data={data} setData={setData} />,
            '3d': <Automaton3D data={data} setData={setData} />
          }[preferences.exhibition]
        }
      </Content>
    </Container>
  );
};

export default Automaton;
