// 1
/* let contador = 0;
while (contador <= 5) {
  console.log("Olá Mundo");

  // incrementar
  contador++;
  // ++contador;
  // contador += 1;
  // contador = contador + 1;
} */


/* for (let contador = 1; contador < 6; contador ++) {
  console.log("Olá Mundo");
}  */

// 2
/* for (let index = 1; index <= 10; index += 2) {
  console.log(index);
} 
 */
//3

for (let index = 1; index <= 10; index++) {
  if (index2=10){
    console.log(`-------------
Tabela do ${index}:`)
  } 
  for (let index2 = 1; index2 <= 10; index2++) {
    let resultado = index * index2
    console.log(`${index} * ${index2} = ${resultado}`)
  }
}


