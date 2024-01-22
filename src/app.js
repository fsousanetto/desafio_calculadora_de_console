const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0 ? "Não é possível dividir por zero!" : num1 / num2);

rl.write(
  console.log('========== CALCULADORA ==========\n')
);

rl.question('Digite um número: ', num1 => {
  rl.question('Escolha a operação (+, -, *, /)', op => {
    rl.question('Digite outro número: ', num2 => {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      op = op;
      
      switch (op) {
        case "+":
          console.log("O resultado da soma é: ", add(num1, num2));
          break;
        case "-":
          console.log("O resultado da subtração é: ", sub(num1, num2));
          break;
        case "*":
          console.log("O resultado da multiplicação é: ", mult(num1, num2));
          break;
        case "/":
          console.log("O resultado da divisão é: ", div(num1, num2));
          break;
        default:
          console.log("Operação inválida");
      };
      
      rl.write(
        console.log('\n========== Fim DA APLICAÇÃO ==========')
        );
        
      rl.close();
    });
  });
});
