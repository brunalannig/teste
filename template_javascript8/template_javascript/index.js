/*let num1=25
let num2=25

if(num1===num2){
    console.log("Sucesso! Números iguais")
}
else{
    console.log("O número é diferente.")
}
---------------------------------------------------

let numUser = prompt("Digite um numero de 1 a 30: ")
let numUser2 = prompt("Digite um numero de 1 a 30: ")
if(numUser===numUser2){
    alert(`${numUser == numUser2}. O numero é igual`) 
}
else{
    alert(`${numUser == numUser2}. O numero é diferente!`)
}

---------------------------------------------------------

let num1=30
let num2=90
if(num1===num2){
    console.log("Números iguais")
}else if (num1>num2) {
    console.log(num1, "é maior que", num2)
}else{
    console.log(num1,"é menor que",num2)
}

--------------------------------------------- 

let pokemonUser = prompt("Escolha um Pokémon entre Bulbassauro, Charmander e Squirtle: ")
switch (pokemonUser){
    case 'Bulbassauro':
        alert("Este Pokémon é do tipo Planta e Veneno")
        break
    case 'Charmander':
        alert("Este Pokémon é do tipo Fogo")
        break
    case 'Squirtle':
        alert("Este Pokémon é do tipo Água")
        break
    default:
        alert("Pokémon não encontrado")
        break
}

-------------------------------------------------*/
//Declara variaveis e lê valores do usuario
let ensinoConcluido = prompt ("Já concluiu o ensino médio? ") // sim //
let maiorIdade = Number(prompt ("Quantos anos você tem? ")) // 18 ou + //
let naoCursando = prompt ("Está cursando alguma outra faculdade? ") // nao //
//Tratando strings
ensinoConcluido = ensinoConcluido.toUpperCase()
naoCursando = naoCursando.toUpperCase().replace("Ã","A")
//Processando dados
if((ensinoConcluido==="SIM")&&(maiorIdade>=18)&&(naoCursando==="NAO")){
    alert('Pode cursar, meu bem!')
}else{
    alert('Não pode cursar :c')
}

