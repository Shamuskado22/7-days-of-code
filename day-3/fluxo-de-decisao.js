const area = prompt(
  "Qual área de desenvolvimento pretende seguir? Digite 1 para Front-End ou 2 para Back-End"
)

if (area == 1) {
  alert("Você escolheu a área de Front-End")

  const aprender = prompt(
    "O que você irá aprender? Digite 1 para React ou 2 para Vue"
  )
  if (aprender == 1) {
    alert("Você escolheu aprender React")
  }
  if (aprender == 2) {
    alert("Você escolheu aprender Vue")
  }
}

if (area == 2) {
  alert("Você escolheu a a área de Back-End")

  const aprender = prompt(
    "O que você irá aprender? Digite 1 para C# ou 2 para Java"
  )
  if (aprender == 1) {
    alert("Você escolheu aprender C#")
  }
  if (aprender == 2) {
    alert("Você escolheu aprender Java")
  }
}

const especializar = prompt(
  "Digite 1 se deseja seguir na área escolhida ou 2 se deseja se tornar Fullstack"
)

if (especializar == 1) {
  alert("Você decidiu seguir na área escolhida")
}
if (especializar == 2) {
  alert("Você decidiu se tornar Fullstack")
}

let decidiu = []
let ok = true

while (ok) {
  let tecnologias = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender?(digite 'sair' para parar)"
  )
  if (tecnologias.toLocaleLowerCase() === "sair") {
    ok = false
  } else {
    alert(`${tecnologias} é realmente muito interessante! Continue estudando!`)
    decidiu.push(tecnologias)
  }
}

alert(`Essas são as tecnologias que você decidiu aprender: ${decidiu}`)
