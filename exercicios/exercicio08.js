// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

const valores = (n1, n2) => {
  if (n1 === n2) {
    return "Por favor digite valores diferentes entre sí";
  }

  const ordenado = [n1, n2].sort((x, y) => x - y);
  return `Em ordem creascente ${ordenado[0]}, ${ordenado[1]}`;
};

const entrada1 = parseFloat(prompt("Digite o primeiro número desejado: "));
const entrada2 = parseFloat(prompt("Digite o segundo número desejado: "));

console.log(valores(entrada1, entrada2));
