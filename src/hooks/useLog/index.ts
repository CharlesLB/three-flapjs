import { useAppDispatch } from '@/redux/hooks';
import { addLog } from '@/redux/slices/logsSlice';
import { toast } from 'react-toastify';

const useLog = () => {
  const dispatch = useAppDispatch();

  const logError = (error: string): void => {
    toast.error(error, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });

    dispatch(
      addLog({
        type: 'error',
        message: error
      })
    );
  };

  const logInfo = (info: string): void => {
    toast.info(info, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });

    dispatch(
      addLog({
        type: 'info',
        message: info
      })
    );
  };

  return {
    logError,
    logInfo
  };
};

export default useLog;
