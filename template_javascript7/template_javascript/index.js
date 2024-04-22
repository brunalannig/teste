let nome = prompt("Digite seu nome: ")
    let email = prompt("Digite seu e-mail: ")
    alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

const meuArray = ["sushi","queijo","pizza","arroz","batata"]
    console.log(meuArray)
    let meuArrayOrdenado = ("\n" + meuArray[0] + "\n" + meuArray[1] + "\n" + meuArray[2] + "\n" + meuArray[3] + "\n" + meuArray[4])
    console.log("Estas são minhas comidas preferidas: " + meuArrayOrdenado)

let comidaUsuario = prompt("Qual sua comida preferida?")
    meuArrayAtualizado = 0
    meuArray[meuArrayAtualizado + 1] = comidaUsuario
    console.log(meuArray)

let array
array = []
let listaDeTarefas = array

let tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)
    
    tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)
    
    tarefasUsuario = prompt("Digite uma tarefa que você precise realizar no dia de hoje: ")
    listaDeTarefas.push(tarefasUsuario)
    console.log(listaDeTarefas)

let indiceUsuario = prompt("Digite o índice de uma tarefa que já realizou: ")
listaDeTarefas.splice(indiceUsuario,1)
console.log(listaDeTarefas)