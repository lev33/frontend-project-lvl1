import readlineSync from 'readline-sync';

const endOfGame = (answer, correctAnswer, name) => {
  console.log('\x1b[31m', answer + '\x1b[0m', 'is wrong answer ;(. Correct answer was'+ '\x1b[31m', correctAnswer + '\x1b[0m','.');
  console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer' + '\x1b[31m', '"yes"' + '\x1b[0m', 'if number even otherwise answer' + '\x1b[31m', '"no"' + '\x1b[0m','.');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
  console.log('');
  for (let step = 0; step < 3; step++) {
    const questionNumber = Math.floor(Math.random() * 100);
    console.log('Question: ' + questionNumber);
    const answer = readlineSync.question('Your answer: ');
    if (questionNumber % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        endOfGame(answer, "yes", name);         
        return;
      }
    } else {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        endOfGame(answer, "no", name);
        return;      
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default even;



