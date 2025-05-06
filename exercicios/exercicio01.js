// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const ehPar = (numInteiro) => {
  if (numInteiro % 2 === 0) {
    return `O numero ${numInteiro} é par!`;
  } else {
    return `O numero ${numInteiro} é impar!`;
  }
};

console.log(ehPar(2498721632));
