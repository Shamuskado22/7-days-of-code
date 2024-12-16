const salvarDados = document.querySelector('#salvarDados');
const table = document.querySelector('#dataTable');
const data = JSON.parse(localStorage.getItem('data')) || [];


// Vincular uma função ao evento de submissão do formulário
salvarDados.addEventListener('click',
  (fullName, birthDate, date, formatedDate, month) => {
    fullName = document.querySelector('#name').value;
    birthDate = document.querySelector('#birth-date').value;

    // A data de nascimento precisa estar no formato DD/MM/AAAA
    date = new Date(birthDate);
    day = date.getDate();
    month = date.getMonth() + 1;
    formatedDate = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    // O mês informado deve estar entre 01 e 12
    if (month < 1) {
      month = 1
    } else {
      month = 12
    };

    // Um nome precisa ter somente letras e espaços, no mínimo 3 e no máximo 120 letras
    if (!/^[a-zA-Z ]{3,120}$/.test(fullName)) {
      alert('O nome só pode conter letras e espaços e caracteres entre 3 e 120 letras.');
      return false;
    };

    // A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console
    console.log(`Nome: ${fullName} \nData de Nascimento: ${formatedDate}`);


    // Chama a função criando uma nova linha
    addRowToTable(fullName, formatedDate)
  });

// Pega os dados informados nos campos do mesmo para salvá-los localmente
const addRowToTable = (fullName, birthDate) => {
  data.push({
    fullName,
    birthDate
  });
  // Salva os dados localmente de forma persistente
  localStorage.setItem('data', JSON.stringify(data));

  const tbody = table.tBodies[0];
  const row = tbody.insertRow();

  const cells = [fullName, birthDate]
  cells.forEach(cellData => {
    const td = document.createElement('td');

    td.textContent = cellData;
    row.appendChild(td);
  });
};

//  E exibi-los em uma tabela.
const loadData = () => {
  if (data && Array.isArray(data)) {
    data.forEach(item => {
      const newRow = document.createElement('tr');
      Object.keys(item).forEach(key => {
        const newCell = document.createElement('td');
        newCell.textContent = item[key];
        newRow.appendChild(newCell);
      });

      table.appendChild(newRow);
    });
  };
};

loadData()