/*let nome = prompt("Digite seu nome: ")
let email = prompt("Digite seu e-mail: ")
alert(`O e-mail ${email} foi cadastrado com sucesso! Seja bem vinda(o), ${nome}.`)*/


/*let comidas = ["sushi, queijo, hamburguer, batata, azeitona"]
console.log(comidas)
console.log("Essas são as minhas comidas preferidas: ", comidas)*/

const comidas = ["sushi", "queijo", "hamburguer", "batata", "azeitona"]
let comidaUsuario = prompt("Digite sua comida preferida:")
console.log(comidaUsuario)
const novasComidas = comidas.replaceAll(/3/g, "comidaUsuario")
console.log(novasComidas)