import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';

const even = () => {
  const question = Math.floor(Math.random() * 100);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (question % 2 === 0) {
    return cons(answer, 'yes');
  }
  return cons(answer, 'no');
};
export default even;
