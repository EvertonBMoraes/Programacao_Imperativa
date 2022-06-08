let competidor1 = [7, 4, 8, 10, 0];
let competidor2 = [5, 2, 9, 6, 8];
let competidor3 = [3, 7, 5, 8, 2];

function notaMedia(competidor) {
  let soma = 0;
  for (i = 0; i < competidor.length; i++) {
    const nota = competidor[i];
    soma += nota;
  }
  return soma / competidor.length;
}

console.log(notaMedia(competidor1));
console.log(notaMedia(competidor2));
console.log(notaMedia(competidor3));

function notaMaior(competidor) {
  let maior = competidor[0];
  for (i = 1; i < competidor.length; i++) {
    const nota = competidor[i];
    if (maior < nota) {
      maior = nota;
    }
  }
  return maior;
}

console.log(notaMaior(competidor1));
console.log(notaMaior(competidor2));
console.log(notaMaior(competidor3));


function vencedor(competidor1, competidor2, competidor3) {
  let media1 = notaMedia(competidor1);
  let media2 = notaMedia(competidor2);
  let media3 = notaMedia(competidor3);
  if (media1 > media2 && media1 > media3) {
    console.log(
      `O compretidor 1 obteve a maior media que foi: ${notaMedia(competidor1)}`
    );
  } else if (media2 > media1 && media2 > media3) {
    console.log(
      `O compretidor 2 obteve a maior media que foi: ${notaMedia(competidor2)}`
    );
  } else {
    console.log(
      `O compretidor 3 obteve a maior media que foi: ${notaMedia(competidor3)}`
    );
  }
  let maior1 = notaMaior(competidor1);
  let maior2 = notaMaior(competidor2);
  let maior3 = notaMaior(competidor3);
  if (maior1 > maior2 && maior1 > maior3) {
    console.log(
      `O compretidor 1 obteve a maior nota que foi: ${notaMaior(competidor1)}`
    );
  } else if (maior2 > maior1 && maior2 > maior3) {
    console.log(
      `O compretidor 2 obteve a maior nota que foi: ${notaMaior(competidor2)}`
    );
  } else {
    console.log(
      `O compretidor 3 obteve a maior nota que foi: ${notaMaior(competidor3)}`
    );
  }
}
vencedor(competidor1, competidor2, competidor3);
