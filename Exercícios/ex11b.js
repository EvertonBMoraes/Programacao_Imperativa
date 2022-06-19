console.log(`Lista de Exercícos
Arrays e Coleções
`);
//O que esses códigos retornam?
//1
console.log(`---------------------------
O que esses códigos retornam? #1
`);
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length - 1]);

//2
console.log(`---------------------------
O que esses códigos retornam? #2
`);
let grupoDeAmigos = [
  ["Harry", "Ron", "Hermione"],
  ["Spiderman", "Hulk", "Ironman"],
  ["Penélope Glamour", "Pierre Nodoyuna", "Patán"],
];
console.log(grupoDeAmigos[1][0]);

//Array Invertido
//1. Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
console.log(`---------------------------
Array Invertido #1
`);
function imprimirInverso(array) {
  for (i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

imprimirInverso(numbers);

//2. Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
console.log(`---------------------------
Array Invertido #2
`);
function inverter(array) {
  return array.reverse();
}

console.log(inverter(numbers));

//somarArray()
//Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
console.log(`---------------------------
Somar Array
`);

function somarArray(array) {
  let resultado = 0;
  for (i = 0; i < array.length; i++) {
    const soma = array[i];
    resultado += soma;
  }
  return resultado;
}

let conjunto1 = [1, 2, 3];
let conjunto2 = [10, 3, 10, 4];
let conjunto3 = [-5, 100];

console.log(somarArray(conjunto1));
console.log(somarArray(conjunto2));
console.log(somarArray(conjunto3));

//Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.
console.log(`---------------------------
Juntar Array
`);

let letras = ["t", "c", "h", "a", "u"];

function join(array) {
  let itens = "";
  for (i = 0; i < array.length; i++) {
    const elemento = array[i];
    itens += elemento;
  }
  return itens;
}

console.log(join(letras));

//Coleções de Filmes (e mais…)
//O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
/* 1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
    Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada. */
console.log(`---------------------------
Coleções de Filmes #1
`);
let filmes = [
  "star wars",
  "matrix",
  "mr. robot",
  "o preço do amanhã",
  "a vida é bela",
];

console.log(filmes[filmes.length - 1]); // acessar o último elemento do array

//2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
//Dica: revise o que faz o método de strings .toUpperCase().
console.log(`---------------------------
Coleções de Filmes #2
`);

function maiúsculas(array) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i].toUpperCase());
  }
}

maiúsculas(filmes);

/* 3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
    Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos. */
console.log(`---------------------------
    Coleções de Filmes #3
    `);

let filmes2 = [
  "Toy Story",
  "Procurando Nemo",
  "Kung-fu Panda",
  "Wally",
  "Fortnite",
];

function juntarArray(array1, array2) {
  return array1.concat(array2);
}

console.log(juntarArray(filmes, filmes2))

/* 4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável. */
console.log(`---------------------------
    Coleções de Filmes #4
    `);

let novoArray = juntarArray(filmes, filmes2);
novoArray.pop();
console.log(novoArray);

/* 5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes. */
console.log(`---------------------------
    Coleções de Filmes #5
    `);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaArray(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      console.log(
        "As notas " + array1[i] + " e " + array2[i] + " são IGUAIS"
      );
    } else {
      console.log(
        "As notas " +
          array1[i] +
          " e " +
          array2[i] +
          " são DIFERENTES"
      );
    }
  }
}

comparaArray(asiaScores, euroScores);

console.log(`
---------------------------`);
