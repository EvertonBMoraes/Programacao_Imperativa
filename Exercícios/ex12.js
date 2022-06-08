// while()
// enquanto alguma condição for verdadeira executar o bloco de código abaixo
// loop infinito, ou seja, o progrma nunca para, PARA COM "CTRL + C"

/* while(true){
    console.log("CUIDADO COM O LOO INFINITO!!!!");
}
*/

/* let contador = 0;
while (contador <= 100) {
  console.log(contador);

  // incrementar
  contador++;
  // ++contador;
  // contador += 1;
  // contador = contador + 1;
} */

/* 
let contador2 = 100;
while (contador2 >= 0) {
  console.log(contador2);

  // decrementar
  contador2--;
  // ++contador;
  // contador += 1;
  // contador = contador + 1;
} 
---------------------------------------*/

//for()   //for of  //for in //forEach (exclusivo para arrays)
// Para i de 0 ate 1000 faca alguma coisa
/*
Primeiro: definir a variavel com um valor
Segundo: definir o criterio da parada de laço
Terceiro: Definir o passo da variavel inicial
*/

/* // Para i de -10 até 2 faça alguma coisa
for (let i = -10; i <= 2; i += 0.1) {
    console.log(i);
  } */

// Para i de 0 até 20 faça alguma coisa
/* for (let i = 0; i <= 20; i++) {
  console.log(i);
} */

//


/* 
function somarArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    // < já considera um a menos do array
  numeros[i] 
  // i = 0 ; numeros[i] = 5
  // i = 1 ; numeros[i] = 10
  //...
  // i = 9 ; numeros[i] = 9
  // i = 10; 10 < 10 --> falso --> Encerra o loop
  const elemento = array[i]
  soma += elemento;
}
  return soma;
}

let numeros = [5, 10, 20, 60, 80, 9, -20, -30, 5.5, 9];
console.log(somarArray(numeros));
console.log(somarArray([1,5,0,-6]));


 */


function somarArray2(array,inicio,fim) {
    let soma = 0;
    for (let i = inicio; i <= fim ; i++) {
    const elemento2 = array[i]
    soma += elemento2;
  }
    return soma;
  }
  
  console.log(somarArray2([1,5,3,-6],0,2));