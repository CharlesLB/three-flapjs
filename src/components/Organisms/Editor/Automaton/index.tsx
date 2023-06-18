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

  const getDataFromStorage = (): IAutomaton => {
    const previousData = localStorage.getItem('automaton');

    setTimeout(() => localStorage.removeItem('automaton'), 1000);

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

      updateDataByNewObject(action.data);
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
      default:
        break;
    }

    dispatch(resetAction());
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
    <Container>
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
