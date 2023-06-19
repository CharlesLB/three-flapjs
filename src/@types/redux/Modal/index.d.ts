interface IModalSlice {
  type: string | null;
  callback?: (value?: any) => void;
  data?: any;
}
