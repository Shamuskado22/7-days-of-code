let numeroPensado = parseInt(Math.random() * 10) + 1
console.log(numeroPensado)
let chute = prompt("Qual número de 1 a 10 estou pensando?")

if (chute != numeroPensado) {
  let tentativas = 2
  while (tentativas > 0) {
    let tentativaSingular = tentativas > 1 ? "tentativas" : "tentativa"
    let maiorMenor = chute < numeroPensado ? "maior" : "menor"

    alert(
      `O número é ${maiorMenor} que o ${chute} e você ainda tem ${tentativas} ${tentativaSingular}`
    )
    chute = prompt("Tente outro número")
    tentativas--
  }
} else {
  alert("Você acertou o número!")
}
alert(`Que pena, o número correto é ${numeroPensado}`)
