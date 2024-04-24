/*let numero = Number(prompt("Digite um número:"))
let soma = 0
while(numero !==0){
    soma=soma+numero
    numero = Number(prompt("Digite um número:"))
}
alert(soma)*/

let array = [11,15,18,14,12,13]
let maiorValor=0
for(let i=0; i<6; i++){
    if(array[i] > maiorValor){
        maiorValor=array[i]
    }
 }
 console.log(maiorValor)