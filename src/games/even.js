import { cons } from 'hexlet-pairs';

const isEven = number => number % 2;

const getRandom = () => Math.floor(Math.random() * 100);

const even = () => {
  const question = getRandom();
  if (!isEven(question)) {
    return cons(`${question}`, 'yes');
  }
  return cons(`${question}`, 'no');
};
export default even;
