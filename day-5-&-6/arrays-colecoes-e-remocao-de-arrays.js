let frutas = []
let laticinios = []
let congelados = []
let doces = []
let adicionar = "sim"

while (adicionar === "sim") {
  adicionar = prompt(
    "Deseja adicionar um item a lista de compras?\nDigite 'sim' para confirmar ou digite 'não' para cancelar"
  )

  if (adicionar === "não" || adicionar === "nao") {
    break
  }

  let item = prompt("Qual item quer adicionar?")
  let categoria = prompt(
    "Escolha o número de acordo com a categoria disponível:\n1. Frutas\n2. Laticínios\n3. Congelados\n4. Doces"
  )

  if (categoria == 1) {
    frutas.push(item)
  } else if (categoria == 2) {
    laticinios.push(item)
  } else if (categoria == 3) {
    congelados.push(item)
  } else if (categoria == 4) {
    doces.push(item)
  } else {
    alert("Categoria não pré-definida")
  }
  // Criar opção de remover algum item da lista perguntando se deseja remover
  let remover = prompt(
    "Deseja remover algum item da lista? \nDigite 'sim' para confirmar ou cancele para sair"
  )

  // Se a pessoa dizer que sim
  if (remover === "sim") {
    // Criar prompt para dizer qual item deseja remover
    // Imprimir os itens atualmente na lista
    remover = prompt(`Qual item deseja remover?\n
    Frutas: ${frutas}\n
    Laticínios: ${laticinios}\n
    Congelados: ${congelados}\n
    Doces: ${doces}`)

    // Depois disso irá remover o item da lista
    if (frutas.indexOf(remover) != -1) {
      frutas.splice(frutas.indexOf(remover), 1)
      // E imprimir a confirmação de que foi removido
      alert(`O item '${remover}' foi removido`)
    } else if (laticinios.indexOf(remover) != -1) {
      laticinios.splice(frutas.indexOf(remover), 1)
      alert(`O item '${remover}' foi removido`)
    } else if (congelados.indexOf(remover) != -1) {
      congelados.splice(congelados.indexOf(remover), 1)
      alert(`O item '${remover}' foi removido`)
    } else if (doces.indexOf(remover) != -1) {
      doces.splice(doces.indexOf(remover), 1)
      alert(`O item '${remover}' foi removido`)
      // Se o item escolhido não for encontrado
    } else {
      // Exibir mensagem de erro
      alert(`O item ${remover} não está na lista`)
    }
  }
}

alert(`Lista de compras:\n
Frutas: ${frutas}\n
Laticínios: ${laticinios}\n
Congelados: ${congelados}\n
Doces: ${doces}`)
