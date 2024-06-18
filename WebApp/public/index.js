const formAdicionar = document.querySelector('.form-adicionar');
const menuLateral = document.querySelector('nav.menu-lateral ul');
const titulo = document.querySelector('.titulo');

//lista
async function obterMateriasBackEnd() {
    try {
      const response = await axios.get('/materias');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

async function criarMateriaBackEnd(nomeMateria) {
    //enviando dados da MATÉRIA para o backend
    try{
        const response = await axios.post('/materias', {
            nome: nomeMateria,
            data_inicio: null,
            data_fim: null,
            origem: null
        });
        
        return response.data;
    } catch(error){
        console.log(error)
    }
}

async function renderizarMateria(nomeMateria, idMateria) {
    try {
        const responseMateria = await axios.get(`/materias/${idMateria}`);
        const responseTags = await axios.get(`/materias/${idMateria}/tags`);

        const tags = responseTags.data;
        const materia = responseMateria.data;
        
        titulo.textContent = nomeMateria;
        titulo.id = "titulo-" + materia.id_materia;

        //renderizar tags
        const tagsContainer = document.querySelector('.tags')
        tagsContainer.innerHTML = '<button class="add-tag-button" onclick="openAddTagModal()">Adicionar Tag</button>';

        for (const tag of tags){ 
            const newTagButton = document.createElement('button');
            newTagButton.textContent = '#' + tag;
            newTagButton.classList.add('tag-button');
            newTagButton.type = "button";
    
            newTagButton.addEventListener('click', function() {
                console.log("Tag clicada:", tag);
            });
    
            tagsContainer.appendChild(newTagButton);
        }
      } catch (error) {
        console.error(error);
    }
}

function renderizarMateriaMenuLateral(materia){
    const novoItemMenu = document.createElement('li');
    novoItemMenu.classList.add('item-menu');

    const novoBotao = document.createElement('button');
    novoBotao.classList.add('botão');
    novoBotao.id = "materia-lateral-" + materia.id_materia;

    const icone = document.createElement('i');
    icone.classList.add('bi', 'bi-backpack2', 'icone');

    const spanTexto = document.createElement('span');
    spanTexto.textContent = materia.nome;

    const iconeLixeira = document.createElement('i');
    iconeLixeira.classList.add('bi', 'bi-trash-fill', 'icone-lixeira');
    iconeLixeira.addEventListener('click', async function (event) {
        //evita que event listener do elemento pai seja acionado
        event.stopPropagation();
        try{
            //diferente do POST e PUT, argumento do DELETE precisa ser passado com {data: }
            const response = await axios.delete("/materias", {data: {id_materia: materia.id_materia}});
            console.log(`Materia com Id: ${materia.id_materia} e Nome: ${materia.nome} DELETADA`);
            console.log(response);
        } catch(error){
            console.log(error);
        }
        
        novoItemMenu.remove();
    });

    novoBotao.appendChild(icone);
    novoBotao.appendChild(spanTexto);
    novoBotao.appendChild(iconeLixeira);

    novoBotao.addEventListener('click', function (event) {
        renderizarMateria(materia.nome, materia.id_materia);
    });

    novoItemMenu.appendChild(novoBotao);
    menuLateral.appendChild(novoItemMenu);
}

async function renderizarMenuLateral() {
    /*const dadosMaterias = [
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
    ];*/
    //Comente a linha abaixo e descomente acima para usar os dados das matérias
    const dadosMaterias = await obterMateriasBackEnd();

    for (const materia of dadosMaterias) {
        renderizarMateriaMenuLateral(materia);
    }
}

renderizarMenuLateral();
//renderizarMateria();

//adicionando matéria
formAdicionar.addEventListener('submit', async function (event) {
    event.preventDefault();

    const nomeMateria = document.getElementById('nome-materia').value.trim();

    if (nomeMateria !== "") {
        const materiaCriada = await criarMateriaBackEnd(nomeMateria);
        renderizarMateriaMenuLateral(materiaCriada);

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

document.getElementById('addTagForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const tagName = document.getElementById('tagName').value.trim();
    if (tagName !== "") {

        try{
            const materiaId = (titulo.id).slice(7);
            await axios.post(`/materias/${materiaId}/tags`, {nome_tag: tagName});

            console.log(materiaId);
            console.log("Tag Adicionada");
        } catch(error){
            console.log(error);
        }
        
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
