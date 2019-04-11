import { cons } from 'hexlet-pairs';
import { startGame, getRandom } from './funcs';

const oper = ['+', '-', '*'];

const getResult = (operation, num1, num2) => {
  switch (operation) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default:
  }
  return 'error operation';
};

const calc = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const currentOper = oper[getRandom(0, oper.length)];
  const question = `${num1} ${currentOper} ${num2}`;
  const rightAnswer = getResult(currentOper, num1, num2);
  return cons(question, String(rightAnswer));
};

export const start = () => {
  const rules = 'What is the result of the expression?';
  startGame(calc, rules);
};

export default calc;
