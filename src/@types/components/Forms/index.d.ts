type IFormMaker = {
  data: IFormMakerInput[][];
  onSubmit: (values: any, setErrors: (value: any) => void) => void;
  title?: string;
  SubmitComponent: React.FC<{
    submit: () => unknown;
    disabled: boolean;
  }>;
};

type IFormMakerInput = {
  id: string;
  label: string;
  description?: string;
  type: string;
  placeholder?: string;
  initialValue?: any;
  disabled?: boolean;
  flex?: number;
  optional?: boolean;
  validation?: any;
  error?: string;
  required?: boolean;
};

type IFormMakerData = {
  [id: string]: any;
};

type IFormMakerValidation = {
  [id: string]: any;
};
