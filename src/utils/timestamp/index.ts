import { twoDigits } from '../string';

const getSimpleTimestamp = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${twoDigits(day)}/${twoDigits(month)}/${year} ${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
};

export { getSimpleTimestamp };
