import { cons } from 'hexlet-pairs';
import generateGame from '..';
import { getRandom } from '../funcs';

const description = 'Answer \x1b[31m"yes"\x1b[0m if number even otherwise answer \x1b[31m"no"\x1b[0m.';

const isEven = number => number % 2;

const generateData = () => {
  const question = getRandom(1, 100);
  if (!isEven(question)) {
    return cons(`${question}`, 'yes');
  }
  return cons(`${question}`, 'no');
};

export default () => generateGame(generateData, description);
