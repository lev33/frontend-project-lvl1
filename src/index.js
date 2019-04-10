import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const endOfGame = (answer, correctAnswer, name) => {
  console.log(`\x1b[31m${answer}\x1b[0m is wrong answer ;(. Correct answer was \x1b[31m${correctAnswer}\x1b[0m.`);
  console.log(`Let\x1b[31m's try again, ${name}! \x1b[0m`);
};

const greeting = (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const numberOfSteps = 3;
  for (let step = 0; step < numberOfSteps; step++) {
    const result = game();
    if (car(result) === cdr(result)) {
      console.log('Correct!');
    } else {
      endOfGame(car(result), cdr(result), name);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default greeting;
