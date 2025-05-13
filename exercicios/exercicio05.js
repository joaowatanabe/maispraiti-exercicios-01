// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require("prompt-sync")();

const calcularImc = (pesoKg, alturaM) => {
  const imc = pesoKg / (alturaM * alturaM);

  let categoria = "";

  if (imc < 18.5) {
    categoria = "baixo peso (Magreza)";
  } else if (imc >= 18.5 && imc <= 24.9) {
    categoria = "peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    categoria = "sobrepeso";
  } else if (imc >= 30) {
    categoria = "obesidade";
  }

  return `Seu IMC é ${imc.toFixed(2)} e você está com ${categoria}`;
};

let peso = parseFloat(prompt("Digite seu peso em Kg: "));
// verifica se o peso é válido
while (isNaN(peso) || peso <= 0) {
  peso = parseFloat(prompt("Peso inválido. Digite um valor vválido em Kg: "));
}

// verifica se a altura é valida
let altura = parseFloat(prompt("Digite sua altura em metros: "));
while (isNaN(altura) || altura <= 0) {
  altura = parseFloat(
    prompt("Altura inválida. Digite um valor válido em metros: ")
  );
}

console.log(calcularImc(peso, altura));
