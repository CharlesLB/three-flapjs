import { IAutomaton } from '@/@types/components/Automaton';

const getFileFromUser = async (): Promise<File> => {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event: any) => {
      resolve(event.target.files[0]);
    };
    input.click();
  });
};

const getDataFromFile = async (file: File): Promise<IAutomaton> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      resolve(JSON.parse(event.target.result));
    };
    reader.readAsText(file);
  });
};

const downloadJsonByObject = (object: any, fileName: string): void => {
  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(object))}`;
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', `${fileName}.json`);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

export { getFileFromUser, getDataFromFile, downloadJsonByObject };
