// 1

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

// 2

function pontuacaoMedia(participante) {
  let soma = 0;
  for (let i = 0; i < participante.length; i++) {
    const nota = participante[i];
    soma += nota;
  }

  return soma / participante.length;
}

console.log(pontuacaoMedia(participanteA));
console.log(pontuacaoMedia(participanteB));
console.log(pontuacaoMedia(participanteC));

// 3

function pontuacaoMaior(participante) {
  let maior = participante[0];
  for (let i = 1; i < participante.length; i++) {
    const nota = participante[i];
    if (nota > maior) {
      maior = nota;
    }
  }
  return maior;
}

console.log(pontuacaoMaior(participanteA));
console.log(pontuacaoMaior(participanteB));
console.log(pontuacaoMaior(participanteC));

// 4

function competicao(participanteA, participanteB, participanteC) {
  let mediaA = pontuacaoMedia(participanteA);
  let mediaB = pontuacaoMedia(participanteB);
  let mediaC = pontuacaoMedia(participanteC);

  if (mediaA > mediaB && mediaA > mediaC) {
    console.log("Particpanmte A ganhou na média");
  } else if (mediaB > mediaA && mediaB > mediaC) {
    console.log("Particpanmte B ganhou na média");
  } else console.log("Particpanmte C ganhou na média");

  let maiorA = pontuacaoMaior(participanteA);
  let maiorB = pontuacaoMaior(participanteB);
  let maiorC = pontuacaoMaior(participanteC);

  if (maiorA > maiorB && maiorA > maiorC) {
    console.log("Particpanmte A ganhou no e-tip");
  } else if (maiorB > maiorA && maiorB > maiorC) {
    console.log("Particpanmte B ganhou no e-tip");
  } else console.log("Particpanmte C ganhou no e-tip");
}

competicao(participanteA,participanteB,participanteC)