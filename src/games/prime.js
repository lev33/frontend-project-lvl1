import { cons } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2 || number === 3 || number === 5) {
    return true;
  }
  if (number < 2 || number % 2 === 0) {
    return false;
  }
  if (number > 6) {
    for (let i = 3; i < number / 2; i += 2) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
};

const generateData = () => {
  const number = getRandom(1, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, rightAnswer);
};

export default () => generateGame(generateData, description);
