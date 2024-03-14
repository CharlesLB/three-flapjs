interface ILog {
  type: 'info' | 'error' | 'success';
  message: string;
  timestamp?: string;
}
