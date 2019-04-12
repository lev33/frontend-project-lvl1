import { cons, car, cdr } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';

const operator = [cons('+', (a, b) => (a + b)), cons('-', (a, b) => (a - b)), cons('*', (a, b) => (a * b))];

const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const currentOperator = operator[getRandom(0, operator.length - 1)];
  const currentOperatorSign = car(currentOperator);
  const currentOperatorFunc = cdr(currentOperator);
  const question = `${num1} ${currentOperatorSign} ${num2}`;
  const rightAnswer = String(currentOperatorFunc(num1, num2));
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
