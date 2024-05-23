class Grafo {
    constructor(){
        this.grafo = new Map();
    }

    adicionarNo(no){
        this.grafo.set(no, []);
    }

    criarAresta(noA, noB){
        //melhorar error handling
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
            console.error("Nó não deve ser referenciar a si mesmo");
            return;
        }

        this.grafo.get(noA).push(noB);
        this.grafo.get(noB).push(noA);
    }

    deletarAresta(noA, noB){
        //melhorar error handling
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

        //this.grafo.delete(no);
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
    const listaArestas = [];

    for (let i = 0; i < listaMaterias.length; i++){
        let materia = listaMaterias[i];
        if(materia.tags[0] === null) continue;
        
        for(let j = i+1; j < listaMaterias.length; j++){
            let materiaComparada = listaMaterias[j];
            if(materiaComparada.tags[0] === null) continue;
            
            let compartilhamTag = comparaArrayDeTags(materia, materiaComparada);
            if(compartilhamTag) listaArestas.push([materia, materiaComparada]);
        }
    }

    return listaArestas;
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

const listaMaterias = [
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
]
const arestas = criarListaDeArestas(listaMaterias);
const grafoTeste = construirGrafo(arestas);

//console.log(arestas);
//const grafoMaterias = construirGrafo(arestas);
//console.log(grafoMaterias);
//grafoMaterias.visualizarPorId();
//grafoMaterias.deletarAresta(grafoMaterias.obterNoPorId(4), grafoMaterias.obterNoPorId(5))

//console.log("Apos deleção")
//grafoMaterias.deletarNo(grafoMaterias.obterNoPorId(4));
//grafoMaterias.visualizarPorId();




/*//////////////////
--------------------
IMPLEMENTAÇÃO VISUAL
--------------------
*///////////////////
// Converter o map em nodes e links?
// Função para converter o Map em arrays de nodes e links