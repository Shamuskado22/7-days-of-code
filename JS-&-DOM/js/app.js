const saveData = document.querySelector('#salvarDados');
const table = document.querySelector('#dataTable');
const data = JSON.parse(localStorage.getItem('data')) || [];


// Vincular uma função ao evento de submissão do formulário
saveData.addEventListener('click',
  (fullName, birthDate, date, formattedDate, month) => {
    fullName = document.querySelector('#name').value;
    birthDate = document.querySelector('#birth-date').value;

    // Um nome precisa ter somente letras e espaços, no mínimo 3 e no máximo 120 letras
    if (!/^[a-zA-Z ]{3,120}$/.test(fullName)) {
      alert('O nome só pode conter letras e espaços e caracteres entre 3 e 120 letras.');
      return false;
    };

    // Se o campo de data de nascimento estiver vazia
    if (birthDate === "") {
      alert('Campo de data precisa ser preenchido');
      return false;
    };

    // A data de nascimento precisa estar no formato DD/MM/AAAA
    date = new Date(birthDate);
    month = date.getMonth() + 1;
    formattedDate = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    // O mês informado deve estar entre 01 e 12
    if (month < 1) {
      month = 1;
    } else {
      month = 12;
    };

    // A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-los no console
    console.log(`Nome: ${fullName} \nData de Nascimento: ${formattedDate}`);

    // Chama a função criando uma nova linha a tabela
    addRowToTable(fullName, formattedDate);
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
        const editButton = document.createElement('td');
        const editBtn = document.createElement('button');

        editBtn.textContent = 'Editar';
        editBtn.addEventListener('click', () => {
          editRow(rowIndex)
        });

        newCell.textContent = item[key];
        newRow.appendChild(newCell);
        editButton.appendChild(editBtn);
        newRow.appendChild(editButton);
      });

      table.appendChild(newRow);
    });
  };
};

loadData();