// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

const notas = (nota) => {
  if (nota >= 7 && nota <= 10) {
    return `A nota do aluno foi ${nota} logo está APROVADO`;
  } else if (nota >= 5 && nota < 7) {
    return `A nota do aluno foi ${nota} logo está em RECUPERAÇÃO`;
  } else if (nota >= 0 && nota < 5) {
    return `A nota do aluno foi ${nota} logo está REPROVADO`;
  } else {
    return "Nota inválida. Digite um valor entre 0 e 10.";
  }
};

while (true) {
  const entrada = prompt('Digite a nota (ou digite "sair" para encerrar): ');

  if (entrada.toLowerCase() === "sair") {
    console.log("Programa encerrado.");
    break;
  }

  const nota = parseInt(entrada, 10);
  console.log(notas(nota));
}
