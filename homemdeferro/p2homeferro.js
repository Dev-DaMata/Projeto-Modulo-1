function botao() {
    var resposta = prompt("Qual é a resposta da segunda pergunta?")
    var contador = 1
    while (contador >= 0) {
        if (resposta == "a" || resposta == "A") {
            alert("Parabéns, você acertou")
            return location = "./p3homeferro.html"
        } else {
            contador--
            alert(`Resposta incorreta, você tem:${contador + 1}chances`)
            resposta = prompt("Qual a resposta da segunda pergunta?")
        }
    }
    return location = "../gameover.html"
}