function imprimeNacionalidade(nacionalidade){
    if(nacionalidade === "brasileira"){
        console.log("Brasileira")
    }
    else if(nacionalidade === "argentina"){
        console.log("Argentina")
    }
    else if(nacionalidade === "uruguaia"){
        console.log("Uruguaia")
    }
    else if(nacionalidade === "chilena"){
        console.log("Chilena")
    }
    else if(nacionalidade === "colombiana"){
        console.log("Colombiana")
    }
    else{
        console.log("Nacionalidade não encontrada")
    }
}

const pergunta = prompt("Escreva aqui sua nacionalidade:").toLowerCase()
imprimeNacionalidade(pergunta)