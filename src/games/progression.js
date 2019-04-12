import { cons } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'What number is missing in the progression?';

const lengthOfProgression = 10;

const generateData = () => {
  const startOfProgression = getRandom(1, 10);
  const stepOfProgression = getRandom(1, 10);
  const indexOfMissingElement = getRandom(0, lengthOfProgression - 1);
  let progression = '';
  let cuurentElement;
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indexOfMissingElement) {
      progression = progression.concat(' ..');
    } else {
      cuurentElement = startOfProgression + i * stepOfProgression;
      progression = progression.concat(' ', cuurentElement);
    }
  }
  const question = `${progression}`;
  const rightAnswer = String(startOfProgression + indexOfMissingElement * stepOfProgression);
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
