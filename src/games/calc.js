import { cons, car, cdr } from 'hexlet-pairs';
import generateGame from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';

const operators = [
  cons('+', (a, b) => (a + b)),
  cons('-', (a, b) => (a - b)),
  cons('*', (a, b) => (a * b))];

const generateData = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operator = operators[getRandom(0, operators.length - 1)];
  const operatorSign = car(operator);
  const operatorFunc = cdr(operator);
  const question = `${num1} ${operatorSign} ${num2}`;
  const rightAnswer = String(operatorFunc(num1, num2));
  return cons(question, rightAnswer);
};

export default () => generateGame(generateData, description);
