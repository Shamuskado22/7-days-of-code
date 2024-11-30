let numeroPensado = parseInt(Math.random() * 10) + 1
console.log(numeroPensado)
let chute = prompt(
  "Qual número de 1 a 10 estou pensando? Você tem 3 tentativas"
)

for (let tentativas = 1; tentativas < 3; tentativas++) {
  if (chute == numeroPensado) {
    alert(`Você acertou o número!`)
    break
  }

  let maiorMenor = chute < numeroPensado ? "maior" : "menor"
  alert(`O número é ${maiorMenor} que o ${chute}`)
  chute = prompt("Tente outro número")
}
alert(`O número correto é ${numeroPensado}`)
