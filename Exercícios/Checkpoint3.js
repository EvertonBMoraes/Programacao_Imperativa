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
        media += nota / this.notas.length; // arredonda a média para cima
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
  "nota de aprovação": 5,
  "faltas máximas": 4,
  "lista de estudantes": [everton, lucas, maria],
  "adicionar aluno": (nome, qtdFaltas, notas) => {
    const addAluno = new estudante(nome, qtdFaltas, notas);
    curso["lista de estudantes"].push(addAluno);
  },
  resultado: (nome) => {
    const aluno = curso["lista de estudantes"].find(
      (elemento) => elemento.nome === nome
    );

    if (aluno === undefined) {
      return `
-------------------------------------

Aluno não encontrado!!!

-------------------------------------
`;
    } else if (
      (aluno.calcularMedia() >= 7.7 && aluno.faltas() === 9) ||
      (aluno.calcularMedia() >= 7 && aluno.faltas() < 9)
    ) {
      return true;
    } else {
      return false;
    }
  },
  final: () => {
    for (const retorno of curso["lista de estudantes"]) {
      const resultados = curso.resultado(retorno.nome)
      if (resultados === true) {
        console.log("Aprovado(a)");
      } else {
        console.log('Reprovado(a)');
      }
    }
  },
};

/* 4. Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso 
objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

curso["adicionar aluno"]("Carlos Massa", 4, [5, 5, 5]);

/* 5. Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. 
Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

/* 6. Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */


curso.final();
