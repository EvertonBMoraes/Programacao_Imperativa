/* Descrição do problema
A partir de um banco eles entram em contato conosco para criar um aplicativo que possa facilitar o manuseio de informações e facilitar as ações que ele precisa. 
Nosso líder de tecnologia nos pede para pensar em como representar usuários, ou contas bancárias, em vez disso. Cada uma dessas contas tem as seguintes informações:
Número da conta (somente números)
Tipo de conta (conta corrente ou poupança em $)
Saldo em $ (valor apenas)
Titular da conta (nome completo)
Com essa informação em mente, somos solicitados a fazer o seguinte. */

//1# Pense na melhor forma de representar tais contas, e por quê? (discutir com a equipe sobre as diferentes estruturas e qual é a mais conveniente)

function contaBancaria(numeroConta,tipoConta,saldo,titularConta){
this.numeroConta = numeroConta;
this.tipoConta = tipoConta;
this.saldo = saldo;
this.titularConta = titularConta;
}

const cliente1 = new contaBancaria(10001,"conta corrente",100.90,"Everton Moraes")
const cliente2 = new contaBancaria(10002,"poupança",75000.33,"Antonio Mesquita")
const cliente3 = new contaBancaria(10003,"conta corrente",2300.00,"Thiago")

console.log(cliente2)