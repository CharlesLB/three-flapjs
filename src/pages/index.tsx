import Editor from '@/components/Organisms/Editor';
import DashboardPage from '@/components/Templates/DashboardPage';
import Metatags from '@/components/Templates/Seo';

import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <DashboardPage>
      <Metatags />
      <Editor />
    </DashboardPage>
  );
};

export default Home;
