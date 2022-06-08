// Objeto literal
let pessoa0 = {
  nome: "Everton",
  altura: 1.9,
  peso: 90,
  imc() {
    return this.peso / this.altura ** 2;
  },
};

// #1 Função Construtora de forma literal 
function Pessoa(nome, altura, peso) {
  return {
    nome: nome,
    altura: altura,
    peso: peso,
    imc() {
      return this.peso / this.altura ** 2;
    },
  };
}

const pessoa1 = Pessoa("Fulano de Tal", 1.8, 90);
// pessoa1.altura = [1.8]
const pessoa2 = Pessoa("Fulano de Tal2", 1.7, 80);
const pessoa3 = Pessoa("Fulano de Tal3", 1.6, 70);
const pessoa4 = Pessoa("Fulano de Tal4", 1.5, 60);
const pessoa5 = Pessoa("Fulano de Tal5", 1.4, 50);
console.log(pessoa1);

// #2 Função Construtora utilizando 'this' 
function Pessoa2(nome, altura, peso) {
  (this.nome = nome),
    (this.altura = altura),
    (this.peso = peso),
    (this.imc = function () {
      return this.peso / this.altura ** 2;
    });
}
// qunado a função construtora da forma this precisa do new antes da chamada da função
const pessoa6 = new Pessoa2("Fulano de Tal", 1.8, 90); 
console.log(pessoa6);
