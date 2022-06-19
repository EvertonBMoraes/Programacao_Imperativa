let cal = require('../modulos/calculadora.js')

console.log(cal.soma(10,2))

let readlineSync = require("readline-sync");

let perguntas = require('./node_modules/readline-sync/lib/readline-sync')

animals = ['ée', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = perguntas.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');

