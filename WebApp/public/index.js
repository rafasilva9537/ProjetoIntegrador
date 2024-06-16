const formAdicionar = document.querySelector('.form-adicionar');
const menuLateral = document.querySelector('nav.menu-lateral ul');
const titulo = document.querySelector('.titulo');

const dadosMaterias = [
    {
        "id_materia": 1,
        "nome": "Linguagem C",
        "data_inicio": "2024-01-23T03:00:00.000Z",
        "data_fim": null,
        "origem": "Alura"
    },
    {
        "id_materia": 2,
        "nome": "Cálculo 2",
        "data_inicio": "2024-01-29T03:00:00.000Z",
        "data_fim": null,
        "origem": "IESB"
    },
    {
        "id_materia": 3,
        "nome": "Estrutura de Dados",
        "data_inicio": "2024-01-13T03:00:00.000Z",
        "data_fim": "2024-02-13T03:00:00.000Z",
        "origem": "Alura"
    },
    {
        "id_materia": 4,
        "nome": "Arquitetura de Computadores",
        "data_inicio": null,
        "data_fim": null,
        "origem": null
    },
    {
        "id_materia": 5,
        "nome": "Sistemas Digitais",
        "data_inicio": "2024-01-29T03:00:00.000Z",
        "data_fim": null,
        "origem": "IESB"
    },
    {
        "id_materia": 6,
        "nome": "WebDesign",
        "data_inicio": "2024-01-13T03:00:00.000Z",
        "data_fim": "2024-02-13T03:00:00.000Z",
        "origem": "Alura"
    }
];

function renderizarMenuLateral() {
    for (const materia of dadosMaterias) {
        const novoItemMenu = document.createElement('li');
        novoItemMenu.classList.add('item-menu');

        const novoBotao = document.createElement('button');
        novoBotao.classList.add('botão');

        const icone = document.createElement('i');
        icone.classList.add('bi', 'bi-backpack2', 'icone');

        const spanTexto = document.createElement('span');
        spanTexto.textContent = materia.nome;

        const iconeLixeira = document.createElement('i');
        iconeLixeira.classList.add('bi', 'bi-trash-fill', 'icone-lixeira');
        iconeLixeira.addEventListener('click', function () {
            novoItemMenu.remove();
        });

        novoBotao.appendChild(icone);
        novoBotao.appendChild(spanTexto);
        novoBotao.appendChild(iconeLixeira);

        novoBotao.addEventListener('click', function () {
            titulo.textContent = materia.nome;
        });

        novoItemMenu.appendChild(novoBotao);
        menuLateral.appendChild(novoItemMenu);
    }
}

renderizarMenuLateral();

formAdicionar.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeMateria = document.getElementById('nome-materia').value.trim();

    if (nomeMateria !== "") {

        document.getElementById('nome-materia').value = "";

        closeAddMateriaModal();

        console.log("Enviando nova matéria para o backend:", nomeMateria);

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

const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');
const mesAnoElemento = document.getElementById('mesAno');
const diasElemento = document.querySelector('.dias');
const popup = document.getElementById('popup');
const infoDia = document.getElementById('infoDia');

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
        elementoDia.addEventListener('click', () => {
            infoDia.textContent = 'Dia: ' + i;
            popup.showModal();
        });
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

document.getElementById('cancelar-Popup').addEventListener('click', function () {
    popup.close();
});

document.getElementById('salvar-Popup').addEventListener('click', function () {
    popup.close();
});

//Parte do Davi:

function rate(starNumber, rowNumber) {
    for (let i = 1; i <= 6; i++) {
      let estrela = document.getElementById('estrela' + i + '-' + rowNumber);
      estrela.innerHTML = i <= starNumber ? '&#9733;' : '&#9734;'; 
    }
  }

//tags:

const tagsContainer = document.querySelector('.tags');

function openAddTagModal() {
    const dialog = document.getElementById('addTagModal');
    dialog.showModal();
}

function closeAddTagModal() {
    const dialog = document.getElementById('addTagModal');
    dialog.close();
}

document.getElementById('addTagForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const tagName = document.getElementById('tagName').value.trim();
    if (tagName !== "") {

        const newTagButton = document.createElement('button');
        newTagButton.textContent = '#' + tagName;
        newTagButton.classList.add('tag-button');
        newTagButton.type = "button";

        newTagButton.addEventListener('click', function() {
            console.log("Tag clicada:", tagName);
        });

        tagsContainer.appendChild(newTagButton);

        document.getElementById('tagName').value = "";

        closeAddTagModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const style = document.createElement('style');
    style.innerHTML = `
        .tag-button {
            margin: 5px;
            padding: 5px 10px;
            background-color: #800080;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});
