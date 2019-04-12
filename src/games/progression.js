import { cons } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const generateData = () => {
  const start = getRandom(1, 10);
  const step = getRandom(1, 10);
  const indexOfMissingElement = getRandom(0, length - 1);
  let progression = '';
  for (let i = 0; i < length; i += 1) {
    if (i === indexOfMissingElement) {
      progression = progression.concat(' ..');
    } else {
      const currentElement = start + i * step;
      progression = progression.concat(' ', currentElement);
    }
  }
  const question = progression;
  const rightAnswer = String(start + indexOfMissingElement * step);
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
