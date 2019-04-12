import { cons } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2;

const generateData = () => {
//  const num = getRandom(1, 100);
  const number = getRandom(1, 100);
  const rightAnswer = isEven(number) ? 'no' : 'yes';
  return cons(number, rightAnswer);
};

export default () => generateGame(generateData, description);
