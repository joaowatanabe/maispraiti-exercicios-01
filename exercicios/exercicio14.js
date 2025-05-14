// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

const fatorial = (numero) => {
  let resultado = 1;
  let i = numero;

  while (i > 1) {
    resultado *= i;
    i--;
  }

  return resultado;
};

const entrada = parseInt(
  prompt("Digite um numero para descobrir o fatorial: ")
);

if (entrada < 0) {
  console.log("Fatorial não existe em numeros negativos");
} else {
  let resultado = fatorial(entrada);
  console.log(`O fatorial de ${entrada} é: ${resultado}`);
}
