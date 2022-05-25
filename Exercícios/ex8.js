let media = 6;

// Se a média do aluno for maior do que 7, então aluno aprovado
// Se não for então aluno reprovado

// if/else -> Se então e senão então
// if -> se -> verdadeiro
// else -> caso contrário -> falso

function retornaStatus(status) {
  console.log(status);
}

if (media >= 7) {
  retornaStatus("Aprovado");
} else if (media >= 5) {
  retornaStatus("Recuperação");
} else {
  retornaStatus("Reprovado");
}
console.log("..............");

// ternário / tem uma particularidade de precisa um valor de retorno
let status = media >= 7 ? "Aprovado" : media >= 5 ? "Recuperação" : "Reprovado";
console.log(status);

console.log("..............");

console.log(`

Bem-vindo ao nosso cardápio digital:

450 - x-burguer
451 - X-egg
452 - Hot-dog
453 - Pizza

`);

// switch / case

let readlineSync = require("readline-sync");

let opcao = readlineSync.question("Escolha sua opção: ");
switch (opcao) {
  case "450":
    console.log("Você selecionou x-burguer");
    break; // faz o encerramento do switch
  case "451":
    console.log("Você selecionou X-egg");
    break;
  case "452":
    console.log("Você selecionou Hot-dog");
    break;
  case "453":
    console.log("Você selecionou Pizza");
    break;
  default:
    console.log("Opção Inválida");
}
