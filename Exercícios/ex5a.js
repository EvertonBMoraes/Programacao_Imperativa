function imc(nome, sobrenome, idade, peso, altura) {
  let imc = peso / altura ** 2;
  console.log(
    `${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(
      2
    )}.`
  );
}

  let readlineSync = require("readline-sync");

  let nome = readlineSync.question("Digite seu nome: ");

  let sobrenome = readlineSync.question("Digite seu sobrenome: ");

  let idade = readlineSync.question("Sua idade?(somente numeros) ");

  let peso = readlineSync.question("Seu peso?(somente numeros e em Kg) ");

  let altura = readlineSync.question(
    "Sua altura?(somente numeros e em metros) "
  );

  
 imc(nome, sobrenome, idade, peso, altura);

