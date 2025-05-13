// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

const prompt = require("prompt-sync")();

const contagemRegressiva = (init) => {
  for (let i = init; i >= 0; i--) {
    console.log(i);
  }
};

const entrada = parseInt(prompt("Digite o valor de entrada para contagem: "));

if (isNaN(entrada)) {
  console.log("Entrada Inválida, por favor digite um número");
} else if (entrada > 0) {
  contagemRegressiva(entrada);
} else {
  console.log("Valor menor ou igual a 0, digite outro numero maior que zero");
}
