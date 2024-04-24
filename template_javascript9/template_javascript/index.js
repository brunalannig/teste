/*let idade = Number(prompt ("Quantos anos você tem?"))
if(idade>=18){
    alert('Pode dirigir, meu bem c:')
}else{
    alert('Não pode dirigir, benzinho :c')
}

let turnoAluno = prompt("Digite a letra correspondente ao turno em que você estuda: M (matutino), V (Vespertino) ou N (Noturno)")
turnoAluno=turnoAluno.toUpperCase()
if (turnoAluno=="M"){
    console.log("Bom dia, querida(o)! c:")
    alert("Bom dia, querida(o)! c:")
} else if(turnoAluno=="V") {
    console.log("Boa tarde, querida(o)! c:")
    alert("Boa tarde, querida(o)! c:")
} else if(turnoAluno=="N") {
    console.log("Boa noite, querida(o)! c:")
    alert("Boa noite, querida(o)! c:")
} else {
    console.log("Turno não identificado.")
    alert("Turno não identificado.")
}

let turnoAluno = prompt("Digite a letra correspondente ao turno em que você estuda: M (matutino), V (Vespertino) ou N (Noturno)")
turnoAluno=turnoAluno.toUpperCase()
switch (turnoAluno){
    case 'M':
        alert("Bom dia, querida(o)! c:")
        break
    case 'V':
        alert("Boa tarde, querida(o)! c:")
        break
    case 'N':
        alert("Boa noite, querida(o)! c:")
        break
    default:
        alert("Turno não identificado.")
        break 
    }*/

    let generoFilme
    let precoFilme
    generoFilme = prompt("Digite o genêro do filme:")
    precoFilme = Number(prompt ("Digite o preço do filme:"))
    generoFilme = generoFilme.toUpperCase()

    if((generoFilme=="Fantasia") && (precoFilme < 15)){
        alert("Bom filme!")
    }else{
        alert("Escolha outro filme :(")
    }


