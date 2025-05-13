// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//   10) utilizando um loop for.

const prompt = require("prompt-sync")();

const tabuada = (n) => {
  let numero = parseFloat(prompt(`Digite o numero da tabuada: `));

  if (isNaN(numero)) {
    console.log("Valor inválido, insira um valor válido.");
    return;
  }
  console.log(`Tabuada do ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
};

tabuada();
