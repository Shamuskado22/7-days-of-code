const salvarDados = document.querySelector('#salvarDados')
// Vincular uma função ao evento de submissão do formulário
salvarDados.addEventListener('click',
  (fullName, birthDate, date, formatedDate, month) => {
    fullName = document.querySelector('#name')
    birthDate = document.querySelector('#birth-date')
    // A data de nascimento precisa estar no formato DD/MM/AAAA
    date = new Date(birthDate.value)
    formatedDate = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    // O mês informado deve estar entre 01 e 12
    month = date.getMonth() + 1
    if (month < 1) {
      month = 1
    } else {
      month = 12
      date.setFullYear(date.getFullYear() + 1)
    }
    // A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console
    console.log(`Nome: ${fullName.value} \nData de Nascimento: ${formatedDate}`)

    const data = [];
    const newSignUp = {
      fullName: fullName.value,
      birthDate: formatedDate,
    }
    data.push(newSignUp)

    const table = document.querySelector('#dataTable')

    const tbody = table.createTBody();
    data.forEach(signUp => {
      const row = tbody.insertRow();
      const cells = Object.values(signUp);
      cells.forEach(cellData => {
        const td = document.createElement('td')
        td.textContent = cellData;
        row.appendChild(td)
      })
    })

    document.body.appendChild(table)
  })

