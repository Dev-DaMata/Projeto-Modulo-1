function botao(){
    var resposta = prompt("Qual é a resposta da terceira pergunta?")
    var contador = 1
    while (contador >0) {
        if (resposta == "a" || resposta == "A") {
            return location = "../parabens.html"
        }else {
            contador--
            alert(`Resposta incorreta, você tem:${contador}chances`)
            resposta = prompt("Qual a resposta da terceira pergunta?")
        }
    }
    return location = "../gameover.html"
}
