import { cons } from 'hexlet-pairs';
import generateGame from '..';
import { getRandom } from '../funcs';

const description = 'What is the result of the expression?';

const oper = ['+', '-', '*'];

const getResult = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    default:
  }
  return num1 * num2;
};

const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const currentOper = oper[getRandom(0, oper.length - 1)];
  const question = `${num1} ${currentOper} ${num2}`;
  const rightAnswer = String(getResult(currentOper, num1, num2));
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
