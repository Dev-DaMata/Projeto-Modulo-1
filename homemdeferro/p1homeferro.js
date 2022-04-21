function botao() {
    var resposta = prompt("Qual a responta da primeira pergunta?")
    var contador = 1
    while (contador >= 0) {
        if (resposta == "b" || resposta == "B") {
            alert("Parabéns, você acertou")
            return location = "./p2homeferro.html"
        } else {
            contador--
            alert(`Resposta incorreta, você tem:${contador + 1}chances`)
            resposta = prompt("Qual a resposta da primeira pergunta?")
        }
    }
    return location = "../gameover.html"


}