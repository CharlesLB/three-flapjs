import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';
import DashboardHeader from '@/components/Templates/DashboardPage/DashboardHeader';
import LoadingCube from '@/components/Molecules/Loaders/LoadingCube';

interface Props {
  children?: React.ReactNode;
}

const DashboardPage: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingCube />;
  }

  return (
    <Container>
      <ToastContainer />

      <DashboardHeader />

      {props.children}
    </Container>
  );
};

export default DashboardPage;
