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

let letras = [ 't', 'c','h','a','u']

function join(array){
let itens = ''
for(i = 0; i < array.length; i++){
const elemento = array[i]
itens += elemento
}
return itens
}

console.log(join(letras))

//Coleções de Filmes (e mais…)
//O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
/* 1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
    Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada. */
console.log(`---------------------------
Coleções de Filmes #1
`);