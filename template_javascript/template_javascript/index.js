//Recebeu as variáveis
let nome = prompt("Digite seu nome: ") 
let idade = prompt("Digite sua idade: ")
//MENSAGEM: Digite as horas que você trabalhou por dia:
let horasTrabalho = prompt("Digite as horas que você trabalha por dia")
let salarioDia = prompt("Digite o seu salário diário")
//Verificando as variaveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
//Convertendo o que é necessário
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
//Processando valores
let valHoraNumber = horasTrabNumbe/salDiaNumber
//Conversão para não dar erro de NULL
let valorHora = String(valHoraNumber)
const mensagem = ("Seu valor hora é", valorHora, "!!!")
//Verificando variáveis
console.log (typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//Saída de valores para Front End
alert(mensagem)