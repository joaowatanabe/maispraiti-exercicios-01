// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require("prompt-sync")();

const fibonacci = (quantidade) => {
  let n1 = 0;
  let n2 = 1;

  for (let i = 0; i < quantidade; i++) {
    console.log(n1);

    let proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
  }
};

const entrada = parseInt(
  prompt("Quantos numeros da sequencia fibonacci deseja: ")
);

if (isNaN(entrada) || entrada <= 0) {
  console.log("Digite um numero inteiro positivo");
} else {
  fibonacci(entrada);
}
