import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';
import DashboardHeader from '@/components/Templates/DashboardPage/DashboardHeader';
import LoadingCube from '@/components/Molecules/Loaders/LoadingCube';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import ModalCaller from '@/components/Organisms/Controllers/ModalCaller';

interface Props {
  children?: React.ReactNode;
}

const DashboardPage: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <LoadingCube />;
  }

  return (
    <Container>
      <Provider store={store}>
        <ToastContainer />
        <ModalCaller />

        <DashboardHeader />

        {props.children}
      </Provider>
    </Container>
  );
};

export default DashboardPage;
