// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

while (true) {
  console.log("--- MENU ---");
  console.log("1 - Dizer Olá Mundo");
  console.log("2 - Mostrar data");
  console.log("3 - Sair");

  const opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

  switch (opcao) {
    case "1":
      console.log("Olá Mundo");
      break;
    case "2":
      console.log("Data atual:", new Date().toLocaleString());
      break;
    case "3":
      console.log("Encerrando o programa...");
      return;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
