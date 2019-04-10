import { cons } from 'hexlet-pairs';

const getRandom = () => Math.floor(Math.random() * 100);

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }
  const c = (a > b) ? b : a;
  const d = (a > b) ? a : b;
  return getGCD(c, d - c);
};

const gcd = () => {
  const question1 = getRandom() + 1;
  const question2 = getRandom() + 1;
  return cons(`${question1} ${question2}`, String(getGCD(question1, question2)));
};
export default gcd;
