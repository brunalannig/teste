/*let idade = Number(prompt ("Quantos anos você tem?"))
if(idade>=18){
    alert('Pode dirigir, meu bem c:')
}else{
    alert('Não pode dirigir, benzinho :c')
}*/

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
