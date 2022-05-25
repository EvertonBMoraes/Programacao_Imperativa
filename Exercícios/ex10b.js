/* Array --> uma variável ou coleção de dados de forma indexada 
os elementos são indexados a partir do 0
o último array vai ser a quantidade de arrays - 1
*/

/* Antes
let nome1 = "teste 1";
let nome2 = "teste 2";
let nome3 = "teste 3"; */

// Agora --> [] Array vazio

//              0         1         2
let nomes = ["fulano1", "fulano2", "fulano3"]; // mesmo tipo

let arrayMisto = [0, "texto", true, 5.3]; // tipos diferentes

// fulano1
nomes[0];

// fulano2
nomes[1];

// tamanho do array
let tamanho = nomes.length; // 3

//fulano 3
nomes[tamanho - 1];

// modificar cada um dos elementos de um array e imprimi-los no console
console.log(nomes);
nomes[0] = 5;
nomes[1] = "Qualquer coisa mais um";
nomes[2] = "Qualquer coisa mais dois";
console.log(nomes);



let perguntas = ["Pergunta 1","Pergunta 2","Pergunta 3"];
let respostas = ["Resposta 1","Resposta 2","Resposta 3"];

// adicionar elementos a um array

/*
Métodos --> podem realizar alguma ação dentro dos arrays
    // push --> adicionar em elemento no final do array
    //unshift -->  adicionar em elemento no início do array
    // pop -->
    // 
*/

perguntas.push("Pergunta 4")
respostas.push("Resposta 4")


perguntas.unshift("Quem dewscobriu o brasil?")
respostas.unshift("Fulano")



console.log(perguntas, respostas,'\n') // \n quebra de linha






