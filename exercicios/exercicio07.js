// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

const valorMacas = (quantidade) => {
  let preco = 0;

  if (quantidade < 12) {
    preco = 0.30;
  } else if (quantidade >= 12) {
    preco = 0.25;
  }

  const total = quantidade * preco;

  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  return `O total da compra de macas foi ${valorFormatado}`;
};

const macas = parseInt(prompt("Digite a quantidade de maças desejadas: "));

console.log(valorMacas(macas));
