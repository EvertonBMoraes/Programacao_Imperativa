/* 1. Crie uma função construtora que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números). */

function estudante(nome, qtdFaltas, notas) {
  (this.nome = nome),
    (this.qtdFaltas = qtdFaltas),
    (this.notas = notas),
    (this.calcularMedia = function () {
      let media = 0;
      for (let i = 0; i < this.notas.length; i++) {
        const nota = this.notas[i];
        media += nota / this.notas.length; //arredonda a média para cima com uma casa decimal, por ex: aluno com 9 faltas e nota 7.66 -> 7.7 , foi aprovado pelo arredondamento
      }
      return media.toFixed(1);
    });
  this.faltas = function () {
    let falta = (this.qtdFaltas += 1);
    return falta;
  };
}

/* 2. Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora. */

const everton = new estudante("Everton Moraes", 5, [9, 10, 8]);
const lucas = new estudante("Lucas Lopes", 8, [7, 7, 9]);
const maria = new estudante("Maria Flores", 4, [3, 5, 3]);

/* 3. crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2). */

curso = {
  "nome do Curso": "Desenvolvedor Back-end",
  "nota de aprovação": 7,  //nota de aprovação e faltas máximas podem ser alteradas conforme critério de aprovação
  "faltas máximas": 9,
  "lista de estudantes": [everton, lucas, maria],
  "adicionar aluno": (nome, qtdFaltas, notas) => {
    const addAluno = new estudante(nome, qtdFaltas, notas);
    curso["lista de estudantes"].push(addAluno);
  },
  resultado: (nome) => {
    const aluno = curso["lista de estudantes"].find(
      (elemento) => elemento.nome === nome
    );

    if (aluno === undefined) {  //foi criada essa saída caso o nome inserido na busca ao chamar o método não exista , undefined
      return `
-------------------------------------

Aluno não encontrado!!!

-------------------------------------
`;
    } else if (
      (aluno.calcularMedia() >=
        curso["nota de aprovação"] + curso["nota de aprovação"] * 0.1 &&
        aluno.faltas() === curso["faltas máximas"]) ||
      (aluno.calcularMedia() >= curso["nota de aprovação"] &&
        aluno.faltas() < curso["faltas máximas"])
    ) {
      return true;
    } else {
      return false;
    }
  },
  final: () => {
    const arrayResultado = [];
    for (const aluno of curso["lista de estudantes"]) {
      const resultado = curso.resultado(aluno.nome);
      if (resultado === true) {
        arrayResultado.push(`${aluno.nome} foi aprovado(a)`);  //dei preferência para exibir o nome do aluno e se ele foi aprovado ou reprovado por ser mais amigável do que somente “true” ou “false”
      } else {
        arrayResultado.push(`${aluno.nome} foi reprovado(a)`);
      }
    }
    return arrayResultado;
  },
};

/* 4. Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso 
objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

curso["adicionar aluno"]("Carlos Massa", 4, [5, 5, 5]);
curso["adicionar aluno"]("Manuel Ribeiro", 6, [10, 10, 8]);
curso["adicionar aluno"]("Evandro Mesquita", 8, [7, 7, 7]);

/* 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

/* 6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */

console.log(curso.final());
