// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require("prompt-sync")();

const somaTotal = () => {
  let soma = 0;

  for (let i = 1; i <= 5; i++) {
    let numero;
    do {
      numero = parseFloat(prompt(`Digite o ${i}º numero: `));

      if (isNaN(numero)) {
        console.log("Valor inválido, insira um valor válido.");
      }
    } while (isNaN(numero));

    soma += numero;
  }

  console.log("A soma total é:", soma);
};

somaTotal();
