import React, { useEffect, useRef, useState } from 'react';

import { Container, Log } from './styles';
import TabsHorizontal from '@/components/Molecules/Tabs/TabsHorizontal';
import { BsFillTrashFill } from 'react-icons/bs';
import { cleanLogs, getLogs } from '@/redux/slices/logsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Logger: React.FC = () => {
  const [selected, setSelected] = useState<string>('all');
  const [onHover, setOnHover] = useState<boolean>(false);
  const logs = useAppSelector(getLogs);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  const filteredLogs = selected === 'all' ? logs : logs.filter((item) => item.type === selected);

  const tabs: ITab[] = [
    { id: 'all', label: 'All' },
    { id: 'success', label: 'Success' },
    { id: 'error', label: 'Errors' },
    { id: 'info', label: 'Infos' }
  ];

  const handleCleanLogs = (): void => {
    dispatch(cleanLogs());
  };

  const scrollToBottom = (): void => {
    // @ts-ignore
    ref.current?.scrollTop = ref.current?.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  return (
    <Container onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <header>
        <TabsHorizontal tabs={tabs} selected={selected} setSelected={setSelected} />

        <aside>
          <a onClick={() => handleCleanLogs()} title="Clear logs">
            <BsFillTrashFill color="#ccc" size={16} />
          </a>
        </aside>
      </header>
      <main ref={ref}>
        {filteredLogs.map((item, index) => (
          <Log key={index} type={item.type}>
            <aside>{item.type}: </aside>
            <span>
              <strong>{`< ${item.timestamp} >`}</strong>
              {item.message}
            </span>
          </Log>
        ))}
      </main>
    </Container>
  );
};

export default Logger;
