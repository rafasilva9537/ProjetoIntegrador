const formAdicionar = document.querySelector('.form-adicionar');
const menuLateral = document.querySelector('nav.menu-lateral ul');
const titulo = document.querySelector('.titulo');

formAdicionar.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeMateria = document.getElementById('nome-materia').value.trim();

    if (nomeMateria !== "") {
        
        const novoItemMenu = document.createElement('li');
        novoItemMenu.classList.add('item-menu');

        const novoBotao = document.createElement('button');
        novoBotao.classList.add('botão');

        const icone = document.createElement('i');
        icone.classList.add('bi', 'bi-backpack2', 'icone');

        const spanTexto = document.createElement('span');
        spanTexto.textContent = nomeMateria;

        const iconeLixeira = document.createElement('i');
        iconeLixeira.classList.add('bi', 'bi-trash-fill', 'icone-lixeira');
        iconeLixeira.addEventListener('click', function() { 
            novoItemMenu.remove();
        });

        novoBotao.appendChild(icone);
        novoBotao.appendChild(spanTexto);
        novoBotao.appendChild(iconeLixeira);

        novoBotao.addEventListener('click', function() {
            titulo.textContent = nomeMateria;
        });

        novoItemMenu.appendChild(novoBotao);
        menuLateral.appendChild(novoItemMenu);

        titulo.textContent = nomeMateria;

        document.getElementById('nome-materia').value = "";
        closeAddMateriaModal();
    } else {
        alert("Por favor, digite um nome para a matéria.");
    }
});

function openperfilModal() {
    var dialog = document.querySelector('.perfil_menu');
    dialog.showModal();
}

function closeperfilModal() {
    var dialog = document.querySelector('.perfil_menu');
    dialog.close();
}

function openAddMateriaModal() {
    var dialog = document.querySelector('.adicionar_mat');
    dialog.showModal();
}

function closeAddMateriaModal() {
    var dialog = document.querySelector('.adicionar_mat');
    dialog.close();
}

function openCalendarModal() {
    var dialog = document.getElementById('pop');
    dialog.showModal();
}

function closeCalendarModal() {
    var dialog = document.getElementById('pop');
    dialog.close();
}

function openregistroModal() {
    var dialog = document.getElementById('registro');
    dialog.showModal();
}

function closeregistroModal() {
    var dialog = document.getElementById('registro');
    dialog.close();
}

function rate(starNumber1) {
    for (let i = 1; i <= 5; i++) {
        let estrela = document.getElementById('estrela' + i);
        estrela.innerHTML = i <= starNumber1 ? '&#9733;' : '&#9734;'; 
    }
}

//calendário
const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');
const mesAnoElemento = document.getElementById('mesAno');
const diasElemento = document.querySelector('.dias');

let dataAtual = new Date();

function renderizarCalendario() {
    const primeiroDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
    const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
    const diasNoMes = ultimoDiaDoMes.getDate();
    const primeiroDiaDaSemana = primeiroDiaDoMes.getDay();

    mesAnoElemento.textContent = `${dataAtual.toLocaleString('pt-BR', { month: 'long' })} ${dataAtual.getFullYear()}`;

    diasElemento.innerHTML = '';

    for (let i = 0; i < primeiroDiaDaSemana; i++) {
        const elementoDia = document.createElement('div');
        elementoDia.classList.add('dia');
        diasElemento.appendChild(elementoDia);
    }

    for (let i = 1; i <= diasNoMes; i++) {
        const elementoDia = document.createElement('div');
        elementoDia.classList.add('dia');
        elementoDia.textContent = i;
        diasElemento.appendChild(elementoDia);
    }
}

btnAnterior.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    renderizarCalendario();
});

btnProximo.addEventListener('click', () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    renderizarCalendario();
});

renderizarCalendario();

const dias = document.querySelectorAll('.dia');
const popup = document.getElementById('popup');
const infoDia = document.getElementById('infoDia');
const cancelarPopup = document.getElementById('cancelar-Popup');
const salvarPopup = document.getElementById('salvar-Popup');

dias.forEach(dia => {
    dia.addEventListener('click', function() {
        const diaClicado = dia.textContent;
        infoDia.textContent = 'Dia: ' + diaClicado;
        popup.showModal();
    });
});

cancelarPopup.addEventListener('click', function() {
    popup.close();
});

salvarPopup.addEventListener('click', function() {
    popup.close();
});

function rate(starNumber, rowNumber) {
    for (let i = 1; i <= 6; i++) {
      let estrela = document.getElementById('estrela' + i + '-' + rowNumber);
      estrela.innerHTML = i <= starNumber ? '&#9733;' : '&#9734;'; 
    }
  }
