import { useAppDispatch } from '@/redux/hooks';
import { addLog } from '@/redux/slices/logsSlice';
import { ToastOptions, toast } from 'react-toastify';

const useLog = () => {
  const dispatch = useAppDispatch();

  const toastOptions: ToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      fontSize: '12px'
    },
    progress: undefined,
    theme: 'colored'
  };

  const logError = (error: string, withoutToast: boolean = false): void => {
    if (!withoutToast) {
      toast.error(error, toastOptions);
    }

    dispatch(
      addLog({
        type: 'error',
        message: error
      })
    );
  };

  const logInfo = (info: string, withoutToast: boolean = false): void => {
    if (!withoutToast) {
      toast.info(info, toastOptions);
    }

    dispatch(
      addLog({
        type: 'info',
        message: info
      })
    );
  };

  const logSuccess = (message: string, withoutToast: boolean = false): void => {
    if (!withoutToast) {
      toast.success(message, toastOptions);
    }

    dispatch(
      addLog({
        type: 'success',
        message: message
      })
    );
  };

  return {
    logError,
    logInfo,
    logSuccess
  };
};

export default useLog;
