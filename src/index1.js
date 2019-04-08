import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer' + '\x1b[31m', '"yes"' + '\x1b[0m', 'if number even otherwise answer' + '\x1b[31m', '"no"' + '\x1b[0m','.');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
  console.log('');
  let step;
  for (step = 0; step < 3; step++) {
    const num = Math.floor(Math.random() * 100);
    console.log('Question: ' + num);
    const actual = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      if (actual === 'yes') {
        console.log('Correct!');
      } else {
        console.log('\x1b[31m', actual + '\x1b[0m', 'is wrong answer ;(. Correct answer was'+ '\x1b[31m', '"yes"' + '\x1b[0m','.');
        console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
        return;
      }
    } else {
      if (actual === 'no') {
        console.log('Correct!');
      } else {
        console.log('\x1b[31m', actual + '\x1b[0m', 'is wrong answer ;(. Correct answer was' + '\x1b[31m', '"no"' + '\x1b[0m','.');
        console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
        return;      
      }
    }
  }
  console.log("Congratulations, " + name + "!");
};

export default greeting;

