import { cons } from 'hexlet-pairs';
import { startGame } from './funcs';

const getRandom = (a, b) => Math.floor(a + Math.random() * (b - a));

const oper = ['+', '-', '*'];

const calc = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const currentOper = oper[getRandom(0, oper.length)];
  const question = `${num1} ${currentOper} ${num2}`;
  const rightAnswer = eval(question);
  return cons(question, String(rightAnswer));
};

export const start = () => {
  const rules = 'What is the result of the expression?';
  startGame(calc, rules);
};

export default calc;
