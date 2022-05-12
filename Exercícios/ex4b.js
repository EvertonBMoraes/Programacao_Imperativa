let readlineSync = require('readline-sync');

let nome = readlineSync.question('Digite seu nome: ');

let sobrenome = readlineSync.question('Digite seu sobrenome: ');

let idade = readlineSync.question('Sua idade?(somente numeros) ');

let peso = readlineSync.question('Seu peso?(somente numeros e em Kg) ');

let altura = readlineSync.question('Sua altura?(somente numeros e em metros) ');

let plano = readlineSync.question('Possui plano de saude? ');

let IMC = peso / altura ** 2

console.log('Seu nome é ' + nome + ' ' + sobrenome + ', você tem ' + idade + ' anos e seu índice de massa corporal é de ' + IMC + '.');
