// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();
let soma = 0;
let contador = 0;

while (true) {
  let entrada = prompt("Digite um numero decimal(ou 0 para sair): ");
  let numero = parseFloat(entrada);
  if (numero === 0) {
    break;
  }

  if (Number.isInteger(numero)) {
    console.log("Esse numero nao e decimal, digite apenas numeros decimais");
    continue;
  }

  soma += numero;
  contador++;
}

if (contador > 0) {
  let media = soma / contador;
  console.log(`A media aritmética dos numeros deciamis é: ${media}`);
} else {
  console.log("nenhum numero decimal foi inserido");
}
