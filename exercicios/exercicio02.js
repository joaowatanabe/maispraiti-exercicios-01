// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require("prompt-sync")();

const faixaEtaria = (idade) => {
  if (idade < 0 || isNaN(idade)) {
    return "Idade inválida.";
  } else if (idade <= 12) {
    return `A pessoa tem ${idade} anos, logo é uma criança.`;
  } else if (idade < 18) {
    return `A pessoa tem ${idade} anos, logo é adolescente.`;
  } else if (idade < 60) {
    return `A pessoa tem ${idade} anos, logo é adulta.`;
  } else {
    return `A pessoa tem ${idade} anos, logo é idosa.`;
  }
};

while (true) {
  const entrada = prompt('Digite a idade (ou digite "sair" para encerrar): ');

  if (entrada.toLowerCase() === "sair") {
    console.log("Programa encerrado.");
    break;
  }

  const idade = parseInt(entrada, 10);
  console.log(faixaEtaria(idade));
}
