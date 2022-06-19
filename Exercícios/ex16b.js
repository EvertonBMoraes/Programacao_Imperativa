/* Descrição do problema
A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
Número da conta (somente números)
Tipo de conta (conta corrente ou poupança em $)
Saldo em $ (valor apenas)
Titular da conta (nome completo)
Com essa informação em mente, somos solicitados a fazer o seguinte. */

//1# Pense na melhor forma de representar tais contas, e por quê? (discutir com a equipe sobre as diferentes estruturas e qual é a mais conveniente)
//2# Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.
//3# Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. 

function contaBancaria(numeroConta,tipoConta,saldo,titularConta){
this.numeroConta = numeroConta;
this.tipoConta = tipoConta;
this.saldo  = saldo;
this.titularConta = titularConta;
}

let clientes = [
 cliente1 = new contaBancaria('10001',"conta corrente",100.90,"Everton Moraes"),
 cliente2 = new contaBancaria('10002',"poupança",75000.33,"Antonio Mesquita"),
 cliente3 = new contaBancaria('10003',"conta corrente",2300.00,"Thiago"),
 cliente4 = new contaBancaria('10004',"poupança",250.00,"Gabriel"),
 cliente5 = new contaBancaria('10005',"conta corrente",150.90,"Gilmar"),
 cliente6 = new contaBancaria('10006',"poupança",7000.33,"Andre"),
 cliente7 = new contaBancaria('10007',"conta corrente",350.00,"Gustavo"),
 cliente8 = new contaBancaria('10008',"poupança",250.00,"Monica"),
 cliente9 = new contaBancaria('10009',"conta corrente",20.00,"Lucas"),
 cliente10 = new contaBancaria('10010',"poupança",20.00,"Ana"),
 cliente11 = new contaBancaria('10011',"poupança",25.30,"Paulo"),
]

/* O líder tecnológico está muito feliz com nosso trabalho até agora. A essa altura já temos um banco de dados com 10 clientes do banco, provavelmente alojados em 10 variáveis diferentes (assumindo que cada variável é um objeto que foi criado com uma função construtora). A partir disso, eles nos pedem as seguintes características. */

//4# A partir dos 10 usuários, gere uma lista onde todos eles convergem (lista de objetos)
 
for (i = 0; i < clientes.length; i++){
     clientes[i]
}
//5#  Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.

function banco(codBancario,nome,clientes){
    this.codBancario = codBancario;
    this.nome = nome;
    this.clientes  = clientes;
    this.consultarCliente =   function (nomeCliente){
        for (i = 0; i < clientes.length; i++){
              if(clientes[i].titularConta == nomeCliente ){
                return clientes[i]
               }
           }
            
        }
    }

    const banco1 = new banco(1001,"Nubank",clientes )
    // console.log(banco1)

  
//6# o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.
console.log(banco1.consultarCliente("Lucas"))



//7# Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .



//8# Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"


