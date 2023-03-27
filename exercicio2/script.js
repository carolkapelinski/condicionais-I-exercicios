function verificaInformacoes(idade, terminouEM, cursandoFaculdade){

if(idade >=18){
    console.log("A pessoa é maior de idade.")
}else {
    console.log("A pessoa é menor de idade.")
}

if(terminouEM === true){
    console.log("A pessoa terminou o ensino médio.")
}else {
    console.log("A pessoa não terminou o ensino médio.")
}

if(cursandoFaculdade === false){
    console.log("A pessoa não está cursando faculdade.")
}else {
    console.log("A pessoa está cursando alguma faculdade.")
}
}

const idade = Number(prompt("Qual a sua idade?"))
const terminouEM = prompt("Você terminou o ensino médio?")
const cursandoFaculdade = prompt("Você está cursando alguma faculdade?")
const terminouEnsMedio = terminouEM === "sim"
const cursandoAlgumaFaculdade = cursandoFaculdade === "sim"

verificaInformacoes(idade, terminouEnsMedio, cursandoAlgumaFaculdade)
