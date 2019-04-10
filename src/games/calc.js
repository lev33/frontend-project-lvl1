import { cons } from 'hexlet-pairs';

const getRandom = () => Math.floor(Math.random() * 100);

const calc = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const oper = getRandom();
  if (oper < 34) {
    return cons(`${num1} + ${num2}`, String(num1 + num2));
  }
  if (oper < 67) {
    return cons(`${num1} - ${num2}`, String(num1 - num2));
  }
  return cons(`${num1} * ${num2}`, String(num1 * num2));
};

export default calc;
