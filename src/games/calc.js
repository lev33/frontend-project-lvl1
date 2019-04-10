import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';

const calc = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const oper = Math.floor(Math.random() * 3);
  if (oper < 1) {
    console.log(`Question: ${num1} + ${num2}`);
  } else if (oper < 2) {
    console.log(`Question: ${num1} - ${num2}`);
  }
  console.log(`Question: ${num1} * ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  if (oper < 1) {
    return cons(answer, String(num1 + num2));
  } else if (oper < 2) {
    return cons(answer, String(num1 - num2));
  }
  return cons(answer, String(num1 * num2));
};

export default calc;
