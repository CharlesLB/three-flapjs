const twoDigits = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

const checkLinkString = (inputString: string) => {
  const sequenceArray = inputString.split(',').map((item) => item.trim());
  const uniqueElements = new Set(sequenceArray);

  return sequenceArray.length === uniqueElements.size;
};

const checkNoSpace = (inputString: string) => {
  return !inputString.includes(' ');
};

export { twoDigits, checkLinkString, checkNoSpace };
