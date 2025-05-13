// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

const verificaTriangulo = (A, B, C) => {
  if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      return "O triangulo é equilátero pois possui todos os lados iguais";
    } else if (A === B || A === C || B === C) {
      return "O triangulo é isosceles pois possui todos os lados iguais";
    } else if (A !== B && B !== C) {
      return "O triangulo é escaleno pois possui todos os lados diferentes";
    }
  } else {
    return "Os valores informados NÃO formam um triangulo";
  }
};

const A = parseFloat(prompt("Digite o lado A: "));
const B = parseFloat(prompt("Digite o lado B: "));
const C = parseFloat(prompt("Digite o lado C: "));

console.log(verificaTriangulo(A, B, C));
