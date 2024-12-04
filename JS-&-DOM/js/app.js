const salvarDados = document.querySelector('#salvarDados')
salvarDados.addEventListener('click', dadosSalvos)
// Vincular uma função ao evento de submissão do formulário
function dadosSalvos() {
  const userName = document.querySelector('#name')
  const birthDate = document.querySelector('#birth-date')

  alert(`Nome: ${userName.value} \nData de Nascimento: ${birthDate.value}`)
  console.log(`Nome: ${userName.value} \nData de Nascimento: ${birthDate.value}`)
}


// A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console
