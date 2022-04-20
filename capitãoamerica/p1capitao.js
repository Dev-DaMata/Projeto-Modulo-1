function botao() {
    var resposta = prompt("Qual a resposta da primeira pergunta?")
    var contador = 1
    while (contador >= 0) {
        if (resposta == "a" || resposta == "A") {
            return location = "./p2capitao.html"
        } else {
            contador--
            alert(`Resposta incorreta, você tem: ${contador + 1} Chances`)
            resposta = prompt("Qual a resposta da primeira pergunta?")
        }
    }
    return location = "../gameover.html"
}