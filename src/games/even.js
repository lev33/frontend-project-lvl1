import { cons } from 'hexlet-pairs';
import { startGame } from './funcs';

const isEven = number => number % 2;

const getRandom = (a, b) => Math.floor(a + Math.random() * (b - a));

const even = () => {
  const question = getRandom(1, 100);
  if (!isEven(question)) {
    return cons(`${question}`, 'yes');
  }
  return cons(`${question}`, 'no');
};

export const start = () => {
  const rules = 'Answer \x1b[31m"yes"\x1b[0m if number even otherwise answer \x1b[31m"no"\x1b[0m.';
  startGame(even, rules);
};

export default even;
