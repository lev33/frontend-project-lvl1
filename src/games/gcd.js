import { cons } from 'hexlet-pairs';
import { startGame } from './funcs';

const getRandom = (a, b) => Math.floor(a + Math.random() * (b - a));

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }
  const c = (a > b) ? b : a;
  const d = (a > b) ? a : b;
  return getGCD(c, d - c);
};

const gcd = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getGCD(num1, num2);
  return cons(question, String(rightAnswer));
};

export const start = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  startGame(gcd, rules);
};

export default gcd;
