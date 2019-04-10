import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfSteps = 3;

const greeting = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let step = 0; step < numberOfSteps; step += 1) {
    const result = game();
    console.log(`Question: ${car(result)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === cdr(result)) {
      console.log('Correct!');
    } else {
      const text = 'is wrong answer ;(. Correct answer was';
      console.log(`\x1b[31m${answer}\x1b[0m ${text} \x1b[31m${cdr(result)}\x1b[0m.`);
      console.log(`Let\x1b[31m's try again, ${name}! \x1b[0m`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default greeting;
