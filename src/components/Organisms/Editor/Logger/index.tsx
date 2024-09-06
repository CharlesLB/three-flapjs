import React, { useState } from 'react';

import { Container, Log } from './styles';
import TabsHorizontal from '@/components/Molecules/Tabs/TabsHorizontal';
import { BsFillTrashFill } from 'react-icons/bs';
import { cleanLogs, getLogs } from '@/redux/slices/logsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Logger: React.FC = () => {
  const [selected, setSelected] = useState<string>('all');
  const logs = useAppSelector(getLogs);
  const dispatch = useAppDispatch();

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

  return (
    <Container id="logger">
      <header>
        <TabsHorizontal tabs={tabs} selected={selected} setSelected={setSelected} />

        <aside>
          <a onClick={() => handleCleanLogs()} title="Clean logs">
            <BsFillTrashFill color="#ccc" size={16} />
          </a>
        </aside>
      </header>
      <main>
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
