
/* propriedades --> 
lengt --> conta a quantidade de caracteres */

let texto = "Minha string"
console.log(texto.length)  

let senha = '1234'
if (senha.length <= 4) {
    console.log ("Por favor insira uma sennha com mais de 4 caracteres");
} else{
    console.log("Senha válida");
}


/* métodos --> Funções que vão representar comportamnetos e ações dentro do nosso objeto
toLocaleUpperCase --> converte tudo em maiúscula
toLocaleLowerCase --> converte tudo em minúscula
includes --> verifica se o texto entre "" existe na string
replace --> substitui uma string por outra, substitui somente a primeira ocorrência
replaceAll --> substitui uma string por outra, substitui todas ocorrências
*/

let texto2 = "Minha String"
console.log(texto2.toLocaleUpperCase());

let texto3 = "Minha String"
console.log(texto3.toLocaleLowerCase());

let email = "everton@hotmail.com"
if (email.includes("@") && email.includes(".com")){
    console.log("É um email válido");
} else {
    console.log("É um email inválido");
}


let texto4 = "teste a minha string & teste outro &"
console.log(texto4.replaceAll("&", "E comercial"));


