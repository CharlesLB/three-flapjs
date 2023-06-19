const twoDigits = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

const checkLinkString = (inputString: string): boolean => {
  const trimmedString = inputString.replace(/\s/g, ''); // Remove all whitespace characters
  const charArray = trimmedString.split(',');

  const validationDoubleString = charArray.every((substring) => {
    const uniqueChars = new Set(substring);
    return substring.length === 1 && uniqueChars.size === 1;
  });

  const uniqueChars = new Set(charArray);
  const validationRepeatedString = charArray.length === uniqueChars.size;

  return validationDoubleString && validationRepeatedString;
};

const checkNoSpace = (inputString: string) => {
  return !inputString.includes(' ');
};

export { twoDigits, checkLinkString, checkNoSpace };
