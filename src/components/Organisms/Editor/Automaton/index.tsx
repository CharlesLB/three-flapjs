import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import dynamic from 'next/dynamic';
import { IAutomaton } from '@/@types/components/Automaton';
import useLog from '@/hooks/useLog';
import { getAutomatonStorage, resetAction } from '@/redux/slices/automatonStorageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IAutomatonStorage } from '@/@types/redux/AutomatonStorage';
import { downloadJsonByObject } from '@/utils/file';
import { cleanAutomaton } from '@/utils/automaton';
import addLink from '@/helpers/Automaton/Links/AddLink';

const Automaton3D = dynamic(() => import('./Automaton3D'), { ssr: false });
const Automaton2D = dynamic(() => import('./Automaton2D'), { ssr: false });

const Automaton: React.FC = () => {
  const logger = useLog();
  const automatonStorage = useAppSelector(getAutomatonStorage);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  const [data, setData] = useState<IAutomaton>({
    // @ts-ignore
    nodes: [
      // ...Array(3).keys()].map((i) => ({ id: i, name: i })
      // ),
    ],
    links: [
      // { source: 0, target: 0, curvature: 0.8, name: 0, rotation: (Math.PI * 1) / 6, linkLabel: 'a' },
      // { source: 0, target: 1, name: 0, linkLabel: 'a' },
      // { source: 2, target: 1, name: 1, curvature: 0.3, linkLabel: 'a' },
      // { source: 1, target: 2, name: 2, curvature: 0.3, linkLabel: 'a' }
    ]
  });

  const getPreviousData = (): void => {
    const previousData = localStorage.getItem('automaton');

    if (!previousData) return;

    const parsedData = JSON.parse(previousData);

    console.log(parsedData);

    setData({
      nodes: [...parsedData.nodes],
      links: []
    });

    setLoading(false);

    setTimeout(() => {
      parsedData.links.forEach((link: any) => {
        console.log(link);
        setData(
          addLink(
            {
              ...data
            },
            link.source?.id,
            link.target?.id,
            link.name
          )
        );
      });
    }, 1000);

    logger.logInfo('Your automaton has been loaded.');
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

  const actionRun = (action: IAutomatonStorage['action']): void => {
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

    const save = (): void => {
      downloadJsonByObject(cleanAutomaton(data), 'automaton');
      logger.logInfo('Your automaton has been downloaded.');
    };

    switch (action.type) {
      case 'load':
        load();
        break;
      case 'save':
        save();
        break;
      default:
        break;
    }

    dispatch(resetAction());
  };

  useEffect(() => {
    if (!automatonStorage.action.type) return;

    actionRun(automatonStorage.action);
  }, [automatonStorage.action]);

  useEffect(() => {
    if (!loading) return;
    getPreviousData();
  }, []);

  return (
    <Container>
      <Content>
        {!loading && (
          <>
            {/* <Automaton3D data={data} setData={setData} /> */}
            <Automaton2D data={data} setData={setData} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Automaton;
