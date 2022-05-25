function microondas(opcao, tempo) {
  if (tempo < opcao) {
    console.log("Tempo insuficiente");
  } else if (tempo > opcao * 2 && tempo <= opcao * 3) {
    console.log("A comida queimou!!");
  } else if (tempo > opcao * 3) {
    console.log("Kabumm!! :( ");
  } else if (tempo >= opcao && tempo <= opcao * 2 ||tempo == "p") {
    console.log("Prato pronto, bom apetite!!! ;)");
  } 
  else {
    console.log("Digite um tempo válido"); // qualquer coisa diferente de número
  }
}

console.log(`

Opções de preparo:

                 Tempo Padrão
(1) Pipoca     = 10 segundos
(2) Macarrão   = 08 segundos
(3) Carne      = 15 segundos
(4) Feijão     = 12 segundos
(5) Brigadeiro = 08 segundos

--------------------------------------------------------
`);

let readlineSync = require("readline-sync");
let prato = readlineSync.question("Escolha o numero do prato: ");

switch (prato) {
  case "1":
    var opcao = 10; // para fazer dessa forma foi necessário utilizar 'var'
    console.log("Você selecionou Pipoca");
    break;
  case "2":
    var opcao = 8;
    console.log("Você selecionou Macarrão");
    break;
  case "3":
    var opcao = 15;
    console.log("Você selecionou Carne");
    break;
  case "4":
    var opcao = 12;
    console.log("Você selecionou Feijão");
    break;
  case "5":
    var opcao = 8;
    console.log("Você selecionou Brigadeiro");
    break;
  default:
    return console.log("Prato inexistente");
}

let tempo = readlineSync.question(`--------------------------------------------------------

Digite o tempo de preparo em segundos("p" para default): `
);

microondas(opcao, tempo);
