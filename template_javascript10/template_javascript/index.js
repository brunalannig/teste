/*let numero = Number(prompt("Digite um número:"))
let soma = 0
while(numero !==0){
    soma=soma+numero
    numero = Number(prompt("Digite um número:"))
}
alert(soma)

-----------------------------------

let array = [11,15,18,14,12,13]
let maiorValor=0
for(let i=0; i<6; i++){
    if(array[i] > maiorValor){
        maiorValor=array[i]
    }
 }
 console.log(maiorValor)

 ------------------------------------

 const palavras = ["Oi", "sumida(o)","tudo","bem?"," Saudades"]
 let frase = ""
 for (let palavra of palavras){
    frase= frase + palavra + " "
 }
 alert(frase)

 -------------------------------------

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i //valor = valor + i (equivalente)
}
console.log(valor)


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}



function imprimirOlaMundo() {
  console.log("Olá Mundo!")
}
imprimirOlaMundo

function imprimeNome(nome){
  alert(`Olá ${nome}`)
}

let nomeUser=""
nomeUser=prompt("Digite seu nome:")
imprimeNome(nomeUser)

function soma(numero1, numero2){
  let resultado
  resultado = numero1 + numero2
  return resultado
}

let soma2 = 0
let exit = 1
while (exit !== 0){

  numero1=Number(prompt("Digite um numero: "))
  numero2=Number(prompt("Digite o segundo numero: "))

  soma2 = soma(numero1,numero2)

  alert(soma2)

  exit = Number(prompt("Digite 0 para sair!!!"))
}*/



array = [1,2,3,4]
novoArray = [array[3]/2, array[0]/2]
console.log(novoArray)

function numeros(n1,n2,n3,n4){
let Arrays
Arrays = n1,n2,n3,n4
return Arrays
}

let Numeros = []
let conjunto
n1 = Number(prompt("Digite um numero: "))
n2 = Number(prompt("Digite um numero: "))
n3 = Number(prompt("Digite um numero: "))
n4 = Number(prompt("Digite um numero: "))

conjunto = numeros(Numeros)
console.log(conjunto)