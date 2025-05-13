// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require("prompt-sync")();

const entrada = parseFloat(
  prompt("Digite um numero inteiro para imprimir 10 vezes: ")
);

const numero = (inteiro) => {
  if (!isNaN(inteiro) && Number.isInteger(inteiro)) {
    for (let index = 1; index <= 10; index++) {
      console.log(inteiro);
    }
  } else {
    console.log("Entrada inválida! Por favor digite um número inteiro!");
  }
};

numero(entrada);
