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
  alert(abrigos)
}

imprimirMenu()

function main(){
  switch (opcao) {
      case 1 : cadastraAbrigo()
         
          break;
          
  case 2: listaCadastros()
     
      break;

  case 3:

    break;

  case 4:

  break;

      default:
          break;
  }
  main()
  let cadastro = imprimirCadastro()
  alert(imprimirCadastro())
  let listagemAbrigos = listarAbrigos()
  alert(listarAbrigos())

}