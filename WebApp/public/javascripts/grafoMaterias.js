class Grafo {
    constructor(){
        this.grafo = new Map();
    }

    adicionarNo(no){
        this.grafo.set(no, []);
    }

    criarAresta(noA, noB){
        const nosExistem = (this.grafo.has(noA)) && (this.grafo.has(noB));
        if(!nosExistem) {
            console.error("Nós não existem");
            return;
        }
        const arestaExiste = this.grafo.get(noA).includes(noB);
        if(arestaExiste) {
            console.error("Aresta já existe");
            return;
        }
        if(noA === noB) {
            //Inora nós que se referenciam a si mesmos, solução para criação de nós sem conexão
            //console.error("Nó não deve ser referenciar a si mesmo");
            return;
        }

        this.grafo.get(noA).push(noB);
        this.grafo.get(noB).push(noA);
    }

    deletarAresta(noA, noB){
        const nosExistem = (this.grafo.has(noA)) && (this.grafo.has(noB));
        if(!nosExistem) {
            console.error("Nós não existem");
            return;
        }
        const arestaExiste = this.grafo.get(noA).includes(noB);
        if(!arestaExiste) {
            console.error("Aresta não existe");
            return;
        }
        if(noA === noB) {
            console.error("Nó não deve ser referenciar a si mesmo");
            return;
        }

        let indexA = this.grafo.get(noA).indexOf(noA);
        this.grafo.get(noA).splice(indexA, 1);

        let indexB = this.grafo.get(noB).indexOf(noB);
        this.grafo.get(noB).splice(indexB, 1);
    }

    deletarNo(no){
        //deletando arestas, conexões dos outros nós
        for (const nosDelecao of this.grafo.get(no)){
            let indexDelecao = this.grafo.get(nosDelecao).indexOf(no);
            
            this.grafo.get(nosDelecao).splice(indexDelecao, 1);
        }

        this.grafo.delete(no);
    }

    obterNoPorId(id){
        for (const [ noProcurado ] of this.grafo){
            if(id === noProcurado.id) return noProcurado;
        }
        console.log("Nó não existe");
        return null;
    }

    visualizarPorId(){
        for(const [noOrigem, nosVizinhos] of this.grafo){
            const idsConexaos = [];
            for (const conexaoAtual of nosVizinhos){
                idsConexaos.push(conexaoAtual.id);
            }
            console.log(noOrigem.id, " => ", idsConexaos);
            //console.log(`${idAtual} => ${conexoesAtuais}`);
        }
    }
}

function comparaArrayDeTags(materiaA, materiaB){
    for (const tag of materiaA.tags){
        // implementação de peso será feita aqui futuramente
        // como ele passa valores true, preciso apenas quantificar para criar um peso
        let compartilhamTag = materiaB.tags.includes(tag);
        if(compartilhamTag) return true;
    }

    return false;
}

function criarListaDeArestas(listaMaterias){
    //Por que criar arestas que se referenciam a si mesmo?
    //Para que, na criação do grafo, ele não precise percorrer todas as matérias apenas para verificar se o nó tem aresta ou não. Em resumo, permite que nós sejam criados mesmo sem conexão.

    const listaArestas = [];

    for (let i = 0; i < listaMaterias.length; i++){
        let materia = listaMaterias[i];
        //let criouAresta = false;
        
        for(let j = i; j < listaMaterias.length; j++){
            let materiaComparada = listaMaterias[j];
            if(materiaComparada.tags[0] === null) {
                listaArestas.push([materia, materia]); //criando aresta com ele mesmo
                continue;
            };
            
            let compartilhamTag = comparaArrayDeTags(materia, materiaComparada);

            if(compartilhamTag) {
                listaArestas.push([materia, materiaComparada]);
                //criouAresta = true;
            }
        }

        //if(criouAresta === false) listaArestas.push([materia, materia]);
    }

    return listaArestas;
}

function arestasPorId(listsaArestas){
    listsaArestas.forEach((aresta) => {
        const [ materiaA, materiaB ] = aresta;
        console.log(`[${materiaA.id}, ${materiaB.id}]`)
    });
}

//como grafo é feito por referencias, é necessário apenas as arestas
//os dados se originam do objeto, não há duplicata deles, mas também, alterar o objeto altera o grafo, e vice-versa
function construirGrafo(listaArestas){
    const novoGrafo = new Grafo();

    for (const aresta of listaArestas){
        const [ noA, noB ] = aresta;
        if(!novoGrafo.grafo.has(noA)) novoGrafo.adicionarNo(noA);
        if(!novoGrafo.grafo.has(noB)) novoGrafo.adicionarNo(noB);

        novoGrafo.criarAresta(noA, noB);
    }

    return novoGrafo;
}

async function obterMateriasBackEnd(){
    try{
        const response = await axios.get("conexoes-materias/dadosGrafo");
        return response.data;
    } catch(error){
        console.log(error);
    }
}

/*const listaMaterias = [
    {
        "id": 4,
        "nome": "Arquitetura de Computadores",
        "tags": [
            "Computação",
            "Hardware"
        ]
    },
    {
        "id": 6,
        "nome": "WebDesign",
        "tags": [
            null
        ]
    },
    {
        "id": 2,
        "nome": "Cálculo 2",
        "tags": [
            "Matemática"
        ]
    },
    {
        "id": 3,
        "nome": "Estrutura de Dados",
        "tags": [
            "Computação",
            "Programação"
        ]
    },
    {
        "id": 1,
        "nome": "Linguagem C",
        "tags": [
            "Computação",
            "Programação"
        ]
    },
    {
        "id": 5,
        "nome": "Sistemas Digitais",
        "tags": [
            "Hardware"
        ]
    }
]*/

const listaMaterias = await obterMateriasBackEnd();
console.log("Aqui está chamando o grafo no backend")
console.log("Aqui:", listaMaterias);

const arestas = criarListaDeArestas(listaMaterias);
export const grafoMaterias = construirGrafo(arestas);
//console.log(arestas);
arestasPorId(arestas);
grafoMaterias.visualizarPorId();
//const grafoMaterias = construirGrafo(arestas);
//console.log(grafoMaterias);
//grafoMaterias.deletarAresta(grafoMaterias.obterNoPorId(4), grafoMaterias.obterNoPorId(5))
//console.log("Apos deleção")
//grafoMaterias.deletarNo(grafoMaterias.obterNoPorId(4));
//grafoMaterias.visualizarPorId();



function converterGrafo(grafo) {
    const nodes = Array.from(grafo.keys()).map(materia => ({
        id: materia.id,
        name: materia.nome
    }));

    const links = [];
    grafo.forEach((value, key) => {
        value.forEach(target => {
            links.push({
                source: key.id,
                target: target.id
            });
        });
    });

    return { nodes, links };
}

const { nodes, links } = converterGrafo(grafoMaterias.grafo);
console.log(links)

// Converter o map em nodes e links?
// Função para converter o Map em arrays de nodes e links
const width = window.innerWidth;
const height = window.innerHeight;

// Especifica a escala de cor
const color = d3.scaleOrdinal(d3.schemeCategory10);

// The force simulation mutates links and nodes, so create a copy
// so that re-evaluating this cell produces the same result.
//const links = data.links.map(d => ({...d}));
//const nodes = data.nodes.map(d => ({...d}));

// Cria uma simulação com diversas forças (repulsão, distância, etc)
const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(250))
    .force("charge", d3.forceManyBody().strength(-200))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

// Cria o container SVG
const svg = d3.select("#graph-container").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");

/*const svg = d3.select("body").append("svg") //não funcionava com d3.create("svg"), descobrir o movito
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; height: auto;");*/

// Adiciona uma linha para cada aresta e um círculo para cada nó
const link = svg.append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

const node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .join("g")

node.append("circle")
    .attr("r", 12)
    .attr("fill", "purple") //.attr("fill", d => color(d.group));

node.append("text")
    .text(d => d.name)
    .attr("x", 6)
    .attr("y", 3)
    .attr("fill", "white")

// Add a drag behavior.
node.call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

// Set the position attributes of links and nodes each time the simulation ticks.
simulation.on("tick", () => {
link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

node
    .attr("transform", d => `translate(${d.x},${d.y})`);
});

// Reheat the simulation when drag starts, and fix the subject position.
function dragstarted(event) {
if (!event.active) simulation.alphaTarget(0.3).restart();
event.subject.fx = event.subject.x;
event.subject.fy = event.subject.y;
}

// Update the subject (dragged node) position during drag.
function dragged(event) {
event.subject.fx = event.x;
event.subject.fy = event.y;
}

// Restore the target alpha so the simulation cools after dragging ends.
// Unfix the subject position now that it’s no longer being dragged.
function dragended(event) {
if (!event.active) simulation.alphaTarget(0);
event.subject.fx = null;
event.subject.fy = null;
}