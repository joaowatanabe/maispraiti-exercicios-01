// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

const ehPar = (numInteiro) => {
  if (numInteiro % 2 === 0) {
    return `O numero ${numInteiro} é par!`;
  } else {
    return `O numero ${numInteiro} é impar!`;
  }
};

let numero;

while (true) {
  const entrada = prompt(
    'Digite um número inteiero (ou digite "sair" para encerrar): '
  );
  if (entrada.toLowerCase() === "sair") {
    console.log("Programa encerrado.");
    break;
  }

  numero = parseInt(entrada, 10);

  if (!isNaN(numero)) {
    break;
  }

  console.log("Entrada inválida. Digite um número inteiro.");
}

console.log(ehPar(numero));
