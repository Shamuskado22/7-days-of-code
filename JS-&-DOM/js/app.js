const salvarDados = document.querySelector('#salvarDados')
salvarDados.addEventListener('click', dadosSalvos)
// Vincular uma função ao evento de submissão do formulário
function dadosSalvos(userName, birthDate, date, formatedDate, month) {
  userName = document.querySelector('#name')
  birthDate = document.querySelector('#birth-date')
  // A data de nascimento precisa estar no formato DD/MM/AAAA
  date = new Date(birthDate.value)
  formatedDate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
  // O mês informado deve estar entre 01 e 12
  month = date.getMonth() + 1
  if (month < 1) {
    month = 1
  } else {
    month = 12
    date.setFullYear(date.getFullYear() + 1)
  }
  // A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console
  alert(`Nome: ${userName.value} \nData de Nascimento: ${formatedDate}`)
  console.log(`Nome: ${userName.value} \nData de Nascimento: ${formatedDate}`)
}

