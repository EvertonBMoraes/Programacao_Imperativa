// Objetos --> Representações do Mundo Real
// {}  --> objeto vazio
let pessoa = {
nome : "Everton",
sobrenome : "Moraes",
idade : 31,
peso : 90,
poses: {
casa: true,
carro: false,
smatphone: true,
}
}

console.log(`Nome: ${pessoa.nome} ${pessoa.sobrenome}`)
console.log('Nome: '+pessoa.nome,pessoa.sobrenome)
console.log(pessoa.poses.smatphone)