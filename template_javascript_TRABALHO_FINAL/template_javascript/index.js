//Array Global
let abrigos = []

function imprimirMenu(){
  let mensagem = ""
  mensagem +="===== ABRIGOS TEMPORÁRIOS ===== \n"
  mensagem += "1. Cadastrar abrigo \n"
  mensagem += "2. Listar abrigos \n"
  mensagem += "3. Procurar abrigo \n"
  mensagem += "4. Sair \n"
  mensagem += "Escolha uma opção: \n"
  let opcao = Number(prompt(mensagem))
  return opcao
}

function cadastraAbrigo(){
  let nome = prompt("Diite o nome: ")
  let endereco = prompt("Digite o endereço:")
  let telefone = prompt("Digite o telefone: ")
  let capacidadeLotacao = prompt("Digite a capacidade de lotação: ")
  abrigos.push({nome,endereco,telefone,capacidadeLotacao})
  alert("Cadastro realizado com sucesso!!!")
}

function listaCadastros(){
  let mensagem = " "
  mensagem +="===== Listagem ===== \n"
  for(let lugar of abrigos){
  mensagem = mensagem + `Nome: ${lugar.nome} Endereço: ${lugar.endereco} Telefone: ${lugar.telefone} Capacidade Lotação: ${lugar.capacidadeLotacao}`
  }
  alert(mensagem)
}

imprimirMenu()
cadastraAbrigo()
listaCadastros()

function main(){
    let option = 0
    while(option !== 5){
        option = imprimirMenu()
  switch (option) {
      case 1 : 
          cadastraAbrigo()
           break;
       case 2:
          listaCadastros()
           break;
       case 3:
 
           break;

  case 4:

  break;

      default:
          break;
  }

}
}
  main()