function soma(x, y) {
  return x + y;
}

function subtração(x, y) {
  return x - y;
}

function multiplicação(x, y) {
  return x * y;
}

function divisão(x, y) {
  return x / y;
}

function quadradoDoNumero(x) {
  return x ** 2;
}

function raizDoNumero(x) {
  return x ** (1 / 2);
}

function mediaDeTresNumeros(x, y, z) {
  return (x + y + z) / 3;
}

function calculaPorcentagem(x, y) {
  return (x * y) / 100;
}

function geradorDePorcentagem(x, y) {
  return (x / y) * 100;
}

console.log(
  `-------------- Teste de Operações / Calculadora --------------
resultado da soma: ${soma(10, 5)}
resultado da subtração: ${subtração(10, 7)}
resultado da multiplicação: ${multiplicação(12, 6)}
resultado da divisão: ${divisão(15, 4).toFixed(2)}
resultado da potência: ${quadradoDoNumero(4)}
resultado da raiz quadrada: ${raizDoNumero(16).toFixed(2)}
resultado da média: ${mediaDeTresNumeros(3, 5, 6).toFixed(1)}
resultado do cálculo da porcentagem: ${calculaPorcentagem(300, 7).toFixed(0)}
resultado do gerador de porcentagem: ${geradorDePorcentagem(20, 200).toFixed(1)}%`
);


/*
Equipe 5
Everton Barros De Moraes
Vinícios Borba
Gustavo Melchior
Paulo César Xavier
--
Raphael Corradini
Tiago De Santana Batista
Guilherme Moreira Carlos
*/
