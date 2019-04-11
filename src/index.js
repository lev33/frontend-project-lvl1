import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfSteps = 3;

const generateGame = (generateData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < numberOfSteps; i += 1) {
    const result = generateData();
    console.log(`Question: ${car(result)}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = cdr(result);
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`\x1b[31m${answer}\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m${rigthAnswer}\x1b[0m.`);
      console.log(`Let\x1b[31m's try again, ${name}! \x1b[0m`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default generateGame;
