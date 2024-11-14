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
}

alert(`Lista de compras:\n
Frutas: ${frutas}\n
Laticínios: ${laticinios}\n
Congelados: ${congelados}\n
Doces: ${doces}`)
