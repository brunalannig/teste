let nome = prompt ("Digite seu primeiro nome: ")
let ano_atual = prompt ("Digite o ano atual: ")
let ano_nascimento = prompt ("Digite o ano de nascimento: ")

let idade = ano_atual - ano_nascimento
let maior_idade = idade >= 18
let idadeEm2050 = 2050 - ano_nascimento

alert(`Seu nome e ${nome} voce tem ${idade} e o ano atual é: ${ano_atual}. É maior de idade? ${maior_idade} .Sua idade em 2050 será: ${idadeEm2050}`)