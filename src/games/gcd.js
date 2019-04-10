import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  return getGCD(a, b - a);
};

const gcd = () => {
  const question1 = Math.floor(Math.random() * 100) + 1;
  const question2 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${question1} ${question2}`);
  const answer = readlineSync.question('Your answer: ');
  return cons(answer, String(getGCD(question1, question2)));
};
export default gcd;
