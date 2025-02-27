const formAdicionar = document.querySelector('.botao-salvar');
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
        const tagsContainer = document.querySelector('.tags');
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

        //renderiza tabela de tópicos
        createTable();
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
formAdicionar.addEventListener('click', async function (event) {
    event.preventDefault();

    const nomeMateria = document.getElementById('nome-materia').value.trim();
    console.log(nomeMateria);

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

//Parte do Davi:

async function obterTopicosBackEnd(idMateria){
    try{
        console.log("idMateria: " + idMateria)
        const response = await axios.get(`materias/${idMateria}/topicos`);
        return response.data;
    } catch(error){
        console.log(error);
    }
}

async function createTable() {
    /* const dadosTopicos = [
        {
            "id_topico": 2,
            "nome": "Funções",
            "progresso": "Em andamento",
            "desempenho": "8.0",
            "id_materia": 2,
            "datas": [
                "2024-04-25T03:00:00.000Z"
            ]
        },
        {
            "id_topico": 3,
            "nome": "Derivada Parcial",
            "progresso": "Não iniciado",
            "desempenho": "9.0",
            "id_materia": 2,
            "datas": []
        },
        {
            "id_topico": 4,
            "nome": "Estrutura de dados",
            "progresso": "Finalizado",
            "desempenho": "9.0",
            "id_materia": 2,
            "datas": []
        }
    ] */

    const materiaId = (titulo.id).slice(7);
    const dadosTopicos = await obterTopicosBackEnd(materiaId);

    const table = document.getElementById("myTable");
    //apagar tabela para chamar outra, senão dados da tabela antiga se mesclam com dados da nova
    table.innerHTML = `
              <tr>
              <th>Tópico</th>
              <th>Progresso</th>
              <th>Desempenho</th>
              <th>Data</th>
              </tr>
    `;

    for (const topico of dadosTopicos) {
        let row = table.insertRow(-1); // Insere no final da tabela
        let currentRowId = topico.id_topico; // Guarda o ID atual da linha
        row.id = currentRowId; // Atribui um ID único

        // Primeira célula com input de texto
        let cell1 = row.insertCell(0);
        cell1.innerHTML = "<input type='text' />";
        //cell1.contentEditable = 'true';

        // Segunda célula com input de texto
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "<input type='text' />";

        // Terceira célula com classificação por estrelas
        let cell3 = row.insertCell(2);
        for (let j = 1; j <= 6; j++) { // Até 6 estrelas
            let estrela = document.createElement('span');
            estrela.id = 'estrela' + j + '-' + currentRowId;
            estrela.className = 'estrela';
            estrela.innerHTML = '☆';
            estrela.onclick = function () { rate(j, currentRowId, topico); };
            cell3.appendChild(estrela);
        }

        // Quarta célula com input de texto
        let cell4 = row.insertCell(3);
        cell4.innerHTML = "<input type='text' />";

        // Adiciona botão de remover na última célula
        let updateCell = row.insertCell(4);
        updateCell.innerHTML = "<button onclick='updateRow(this)'>Atualizar</button>";
        let removeCell = row.insertCell(5);
        removeCell.innerHTML = "<button onclick='removeRow(this)'>Remover</button>";
  

        //cell1.textContent = ;
        if (!topico.nome){
            cell1.innerHTML = `<input type='text''/>`;
        }
        else{
            cell1.innerHTML = `<input type='text' value='${topico.nome}'/>`;
        }

        cell2.innerHTML = `<input type='text' value='${topico.progresso}'/>`;

        if (!topico.datas[0]) {
            cell4.innerHTML = `<input type='text' value=''/>`;
        }
        else {
            topico.datas[0] = new Date(topico.datas[0]);
            const dia = topico.datas[0].getDay();
            const mes = topico.datas[0].getMonth();
            const ano = topico.datas[0].getFullYear();

            cell4.innerHTML = `<input type='text' value='${dia.toString().padStart(2, 0)}/${mes.toString().padStart(2, 0)}/${ano.toString().padStart(2, 0)}'/>`;
        }

        cell1.childNodes[0].classList.add("input-topico");
        cell2.childNodes[0].classList.add("input-topico");
        cell4.childNodes[0].classList.add("input-topico");
        cell4.childNodes[0].classList.add("data-topico");
        updateCell.childNodes[0].classList.add("botao-topico");
        removeCell.childNodes[0].classList.add("botao-topico");
    }
}

async function criaTopicoBackEnd(idMateria){
    try{
        const response = await axios.post(`/materias/${idMateria}/topicos`, 
            {
                "nome": null,
                "progresso": "não iniciado",
                "desempenho": 0,
                "id_materia": idMateria,
            }
        );
        return response.data;
    } catch(error){
        console.log(error);
    }
}
// Contador global para IDs da linha
let rowIdCounter = 1;

//Adicionar nova linha com classificação por estrelas na terceira coluna
//obs: o (-1),(0),(1),(2); (-1)insere no final, (0)inicio e (1)após a primeira celula
async function addRow() {

    /*const topico = {
        "nome": null,
        "progresso": null,
        "desempenho": 0,
        "id_materia": 2,
        "datas": []
    }*/

    const materiaId = (titulo.id).slice(7);
    const topico = await criaTopicoBackEnd(materiaId);
    console.log("Topico criado:", topico);

    let table = document.getElementById("myTable");
    let row = table.insertRow(-1); // Insere no final da tabela
    let currentRowId = topico.id_topico; // Guarda o ID atual da linha
    row.id = currentRowId; // Atribui um ID único

    // Primeira célula com input de texto
    let cell1 = row.insertCell(0);
    cell1.innerHTML = "<input type='text' />";
    //cell1.contentEditable = 'true';

    // Segunda célula com input de texto
    let cell2 = row.insertCell(1);
    cell2.innerHTML = "<input type='text' />";

    // Terceira célula com classificação por estrelas
    let cell3 = row.insertCell(2);
    for (let j = 1; j <= 6; j++) { // Até 6 estrelas
        let estrela = document.createElement('span');
        estrela.id = 'estrela' + j + '-' + currentRowId;
        estrela.className = 'estrela';
        estrela.innerHTML = '☆';
        estrela.onclick = function () { rate(j, currentRowId, topico); };
        cell3.appendChild(estrela);
    }

    // Quarta célula com input de texto
    let cell4 = row.insertCell(3);
    cell4.innerHTML = "<input type='text' />";

    // Adiciona botão de remover na última célula
    let updateCell = row.insertCell(4);
    updateCell.innerHTML = "<button onclick='updateRow(this)'>Atualizar</button>";
    let removeCell = row.insertCell(5);
    removeCell.innerHTML = "<button onclick='removeRow(this)'>Remover</button>";

    //cell1.textContent = ;
    cell1.innerHTML = `<input type='text''/>`
    cell2.innerHTML = `<input type='text' value='não iniciado'/>`;cell4.innerHTML = `<input type='text' value=''/>`;

    cell1.childNodes[0].classList.add("input-topico");
    cell2.childNodes[0].classList.add("input-topico");
    cell4.childNodes[0].classList.add("input-topico");
    updateCell.childNodes[0].classList.add("botao-topico");
    removeCell.childNodes[0].classList.add("botao-topico");
}

// Função para editar célula
function editCell(cell) {
    let currentText = cell.innerHTML;
    cell.innerHTML = "<input type='text' value='" + currentText + "'/>";
    cell.firstChild.focus();
    cell.firstChild.onblur = function () {
        cell.innerHTML = this.value;
    };
}


// Função para remover linha
async function removeRow(button) {
    const row = button.parentNode.parentNode;
    console.log("Id botão:", row.id);
    const idTopico = row.id;
    const idMateria = (titulo.id).slice(7);

    try{
        await axios.delete(`/materias/${idMateria}/topicos`,
            { data: { id_topico: idTopico } }
        );
    } catch(error){
        console.log(error);
    }

    document.getElementById("myTable").deleteRow(row.rowIndex);
}

async function atualizarTopicoBackEnd(topicoAtualizado){
    try{
        const response = await axios.put(`/materias/${topicoAtualizado.id_materia}/topicos`, topicoAtualizado);
        return response.data;
    } catch(error){
        console.log(error);
    }
}

async function updateRow(button) {
    const idMateria = (titulo.id).slice(7);
    const row = button.parentNode.parentNode;
    const idTopico = row.id;

    const novoNome = row.childNodes[0].childNodes[0].value;
    const novoProgresso = row.childNodes[1].childNodes[0].value;
    const novaData = row.childNodes[3].childNodes[0].value;

    const topicoAtualizado = {
        nome: novoNome,
        progresso: novoProgresso,
        desempenho: 0,
        id_topico: idTopico,
        id_materia: idMateria
    }

    await atualizarTopicoBackEnd(topicoAtualizado);
    console.log(topicoAtualizado);
}

// Função para atualizar classificação por estrelas
function rate(starNumber, rowNumber, topico) {
    for (let i = 1; i <= 6; i++) {
        let estrela = document.getElementById('estrela' + i + '-' + rowNumber);
        estrela.innerHTML = i <= starNumber ? '★' : '☆';
    }

    let desempenho = (starNumber / 6) * 100;
    let desempenhoId = 'desempenho' + rowNumber;
    console.log(desempenhoId + ': ' + desempenho);

    //IMPLEMENTAR QUERY DO BANDO DO BANCO DE DADOS
    topico.desempenho = Math.floor(desempenho);
    console.log(topico)
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
