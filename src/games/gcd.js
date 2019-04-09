import readlineSync from 'readline-sync';

const endOfGame = (answer, correctAnswer, name) => {
  console.log('\x1b[31m', answer + '\x1b[0m', 'is wrong answer ;(. Correct answer was'+ '\x1b[31m', correctAnswer + '\x1b[0m','.');
  console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
};


const realGCD = (a, b) => {
  if (a === b) {
    return a;
  }  
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;    
  }  
  return realGCD(a, b - a);
};

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
  console.log('');
  for (let step = 0; step < 3; step++) {
    const questionNumber1 = Math.floor(Math.random() * 100);
    const questionNumber2 = Math.floor(Math.random() * 100);
    console.log(`Question: ${questionNumber1} ${questionNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === realGCD(questionNumber1, questionNumber2)) {
      console.log('Correct!');
    } else {
      endOfGame(answer, realGCD(questionNumber1, questionNumber2), name);         
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gcd;
