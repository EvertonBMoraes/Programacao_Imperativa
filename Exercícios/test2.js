let everton = [6.5,8,3,4,7]
let gustavo = [5,8,10,7.5,3]
let lucas = [3,9.5,5,6,8]

function mediaNota(aluno){
let soma = 0;
for (i = 0; i < aluno.length; i++ ){
const nota = aluno[i];
soma += nota  
}
return soma/aluno.length
}

console.log(mediaNota(everton))

function maiorNota(aluno){
let maior = aluno[0]
for (i = 1; i < aluno.length; i++ ){
const nota = aluno[i]
if (maior < nota){
maior = nota
}
}
return maior
}
console.log(maiorNota(gustavo))
