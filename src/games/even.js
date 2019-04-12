import { cons } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2;

const generateData = () => {
  const num = getRandom(1, 100);
  const question = `${num}`;
  const rightAnswer = isEven(num) ? 'no' : 'yes';
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
