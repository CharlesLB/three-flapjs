import Editor from '@/components/Organisms/Editor';
import DashboardPage from '@/components/Templates/DashboardPage';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <DashboardPage>
      <Editor />
    </DashboardPage>
  );
};

export default Home;
