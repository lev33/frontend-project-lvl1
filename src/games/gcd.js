import { cons } from 'hexlet-pairs';
import generateGame from '..';
import { getRandom } from '../funcs';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }
  const c = (a > b) ? b : a;
  const d = (a > b) ? a : b;
  return getGCD(c, d - c);
};

const generateData = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return cons(question, String(rightAnswer));
};

export default () => generateGame(generateData, description);
