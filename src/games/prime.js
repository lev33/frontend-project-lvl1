import { cons } from 'hexlet-pairs';
import generateGame from '..';
import { getRandom } from '../utils';

const description = 'Answer \x1b[31m"yes"\x1b[0m if given number is prime. Otherwise answer \x1b[31m"no"\x1b[0m.';

const isPrime = (number) => {
  if (number < 4) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  if (number > 8) {
    for (let i = 3; i < number / 2; i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const generateData = () => {
  const question = getRandom(1, 100);
  if (isPrime(question)) {
    return cons(`${question}`, 'yes');
  }
  return cons(`${question}`, 'no');
};

export default () => generateGame(generateData, description);
