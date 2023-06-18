interface IModalSlice {
  type: string | null;
  callback?: () => void;
  data?: any;
}
