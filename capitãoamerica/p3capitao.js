function botao() {
    var resposta = prompt("Qual a resposta da terceira pergunta?")
    var contador = 1
    while (contador >0) {
        if(resposta == "c" || resposta == "C"){
            return location = "../parabens.html"
        } else {
            contador --
            alert(`Resposta incorreta, você tem: ${contador} Chances`)
            resposta = prompt("Qual a resposta da terceira pergunta?")
        }
    }
    return location = "../gameover.html"
}