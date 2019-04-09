import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
  console.log('');
  let step;
  for (step = 0; step < 3; step++) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const oper = Math.floor(Math.random() * 3);
    if (oper < 1) {
      console.log(`Question: ${num1} + ${num2}`);
    } else if (oper < 2) {
      console.log(`Question: ${num1} - ${num2}`);
    } else {
      console.log(`Question: ${num1} * ${num2}`);
    }
      const actual = readlineSync.question('Your answer: ');
    if (oper < 1) {
      if (Number(actual) === num1 + num2) {
        console.log('Correct!');
      } else {
        console.log('\x1b[31m', actual + '\x1b[0m', 'is wrong answer ;(. Correct answer was'+ '\x1b[31m', String(num1 + num2) + '\x1b[0m','.');
        console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
        return;
      }
    } else if (oper < 2) {
      if (Number(actual) === num1 - num2) {
        console.log('Correct!');
      } else {
        console.log('\x1b[31m', actual + '\x1b[0m', 'is wrong answer ;(. Correct answer was' + '\x1b[31m', String(num1 - num2) + '\x1b[0m','.');
        console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
        return;      
      }
    } else {
      if (Number(actual) === num1 * num2) {
        console.log('Correct!');
      } else {
        console.log('\x1b[31m', actual + '\x1b[0m', 'is wrong answer ;(. Correct answer was' + '\x1b[31m', String(num1 * num2) + '\x1b[0m','.');
        console.log("Let" + '\x1b[31m', "'s try again, " + name + "!" + '\x1b[0m');
        return;      
      }
    }
  }
  console.log("Congratulations, " + name + "!");
};

export default calc;
