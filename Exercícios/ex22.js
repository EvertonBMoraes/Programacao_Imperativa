/*
let conta = n => n * 2;

console.log(conta(3));

var alpha = ['a', 'b', 'c'];

// creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged
var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);


------------------------------------------------------------------------------------------------------ */

//Micro desafios

/* 1 Crie uma função que receba um array composto por números e retorna uma nova matriz (array) 
com todos os valores divididos pela soma de toda a matriz, usando map() e reduce(). */
let conjunto = [0, 1, 1, 0];

function resultado(array) {
    let resultadoSoma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual,0)
    let resultadoDivisao = array.map( array => array/resultadoSoma )
    return resultadoDivisao
}

console.log(resultado(conjunto));

/* 2 Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) 
com apenas as palavras que têm mais do que uma quantidade de letras 
maior do que o número informado. (verifique como funciona o método filter ()) */



/* 3 Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. 
Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. 
(Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array) */



