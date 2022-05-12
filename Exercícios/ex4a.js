let nome = "José";
let sobrenome = "da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.7;
let temPlano = true;
let imc = peso / altura ** 2;

console.log(
  nome +
    " " +
    sobrenome +
    " tem " +
    idade +
    " anos e seu índice de massa corporal é de " +
    imc.toFixed(2) +
    "."
);
console.log(
  `${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(
    2
  )}.`
);
