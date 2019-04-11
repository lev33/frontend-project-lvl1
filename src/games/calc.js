import { cons } from 'hexlet-pairs';
import generateGame from '..';
import { getRandom } from '../utils';

const description = 'What is the result of the expression?';

const operator = ['+', '-', '*'];

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
  const currentOperator = operator[getRandom(0, operator.length - 1)];
  const question = `${num1} ${currentOperator} ${num2}`;
  const rightAnswer = String(getResult(currentOperator, num1, num2));
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
