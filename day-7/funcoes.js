function somar(n1, n2) {
  n1 = parseInt(prompt("Escolha o primeiro número"))
  n2 = parseInt(prompt("Escolha o segundo número para somar"))
  let res = n1 + n2
  alert(`O resultado de ${n1} + ${n2} é igual a ${res}`)
}

function subtrair(n1, n2) {
  n1 = parseInt(prompt("Escolha o primeiro número"))
  n2 = parseInt(prompt("Escolha o segundo número para subtrair"))
  let res = n1 - n2
  alert(`O resultado de ${n1} - ${n2} é igual a ${res}`)
}

function mutiplicar(n1, n2) {
  n1 = parseInt(prompt("Escolha o primeiro número"))
  n2 = parseInt(prompt("Escolha o segundo número para multiplicar"))
  let res = n1 * n2
  alert(`O resultado de ${n1} x ${n2} é igual a ${res}`)
}

function dividir(n1, n2) {
  n1 = parseInt(prompt("Escolha o primeiro número"))
  n2 = parseInt(prompt("Escolha o segundo número para dividir"))
  let res = n1 / n2
  alert(`O resultado de ${n1} ÷ ${n2} é igual a ${res}`)
}

function sair() {
  alert("Até a próxima")
}

let operacao = prompt(
  "Escolha um número de 1 a 4 para realizar a operação: \n(Escolha 5 para 'sair') \n1. Soma \n2. Subtração \n3. Multiplicação \n4. Divisão \n5. Sair"
)

switch (operacao) {
  case "1":
    somar()
    break

  case "2":
    subtrair()
    break

  case "3":
    mutiplicar()
    break

  case "4":
    dividir()
    break

  case "5":
    sair()
    break

  default:
    sair()
    break
}
