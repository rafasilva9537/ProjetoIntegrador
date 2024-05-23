const RED = "\x1b[31m" 
const GREEN = "\x1b[32m" 
const RESET = "\x1b[0m" 

//GRAFO SERÁ NÃO DIRECIONAL, ou seja, tem sentido de ida e volta
//ARESTAS são referências de objetos ("ponteiros de objetos")

/*
const arestas = [
    [m1, m2], 
    [m3, m2],
    [m3, m1],
    [m4, m1]
]

m1---m4
 | \
m2--m3
*/
function arestaExiste(aresta, listaArestas){
    //Por que não comparar referências?
    //Dois objetos que se referenciam a endereços diferentes podem conter os mesmos valores

    const tamanho = listaArestas.length;
    if(tamanho < 1) return false;

    for(let i = 0; i < tamanho; i++){
        let primeiraMateriaExiste = listaArestas[i][0].id_materia === aresta[0].id_materia
        let segundaMateriaExiste = listaArestas[i][1].id_materia === aresta[1].id_materia
        if(primeiraMateriaExiste && segundaMateriaExiste) return true;

        //comparando valores invertidos M1 ↔ M2 = M2 ↔ M1
        segundaMateriaExiste = listaArestas[i][0].id_materia === aresta[1].id_materia
        segundaMateriaExiste = listaArestas[i][1].id_materia === aresta[0].id_materia
        if(segundaMateriaExiste && primeiraMateriaExiste) return true;
    }
    return false;
}

//função cria uma lista de referencias entres objetos
//será que é melhor usar apenas os valores? (Referencia vai direto no objeto, valores precisa ser feito buscas)
function criarListaDeArestas(listaMateriasPorTag){
    const listaArestas = [];

    const tamanho = listaMateriasPorTag.length;
    for (let i = 0; i < tamanho; i++){
        if(listaMateriasPorTag[i].tag === null) continue; //tag null não cria conexoes

        const { materias } = listaMateriasPorTag[i];
        for(let i = 0; i < (materias.length); i++){
            for(let j = i+1; j < (materias.length); j++){
                const atualAresta = [materias[i], materias[j]];

                //como a ordem não importa, é preciso verificar os dois casos 
                //[m1, m2] = [m2, m1] logo precisa evitar duplicatas
                //Implementação temporária, essas duplicatas serão usadas futuramente para crir "pesos" entre conexões
                if(arestaExiste(atualAresta, listaArestas)) continue;

                listaArestas.push(atualAresta);
            }
        }
    }
    return listaArestas;
}

function adicionarNo(no, grafo){
    grafo.set(no, []);
}

function encontrarNoPorId(noId, grafo){
    let no = null;
    for (const [noOrigem=key] of grafo){
        if(noOrigem.id_materia === noId){
            no = noOrigem;
            return no;
        }
    }
    //se não encontrar no, retorna null
    return no;
}

function removerNoPorId(noId, grafo){
    const no = encontrarNoPorId(noId, grafo);
    if(!no) null;

    this.grafo.get(nosDelecao)[indexDelecao]

    grafo.delete(no);
    return no;
}

function criarAresta(noA, noB, grafo){
    grafo.get(noA).push(noB);
    grafo.get(noB).push(noA);
}

function construirGrafo(listaArestas){
    const grafo = new Map();

    for (let aresta of listaArestas){
        const [ noA, noB ] = aresta;
        console.log(`Grafo tem noA: ${noA.id_materia} = ${grafo.has(noA)}`);
        console.log(`Grafo tem noB: ${noB.id_materia} = ${grafo.has(noB)}`);
        if(!(grafo.has(noA))) adicionarNo(noA, grafo);
        if(!(grafo.has(noB))) adicionarNo(noB, grafo);

        criarAresta(noA, noB, grafo);
    }

    return grafo;
}

function printarArestasFormaDeId(aresta){
    console.log("Arestas por ID:")
    for (const [noA, noB] of arestas){
        console.log(`[${noA.id_materia} - ${noB.id_materia}]`);
    }
}

function printarGrafoFormaDeId(grafo){
    if(!grafo) {
        console.log(RED + "Grafo não existe" + RESET);
        return;
    };

    for(const [key, values] of grafo){
        let idAtual = key.id_materia;
        let conexoesAtuais = values;
        const idsConexaos = [];
        for (const conexaoAtual of conexoesAtuais){
            idsConexaos.push(conexaoAtual.id_materia);
        }
        console.log(idAtual, " => ", idsConexaos);

        //console.log(`${idAtual} => ${conexoesAtuais}`);
    }
}

//null é necessário pois pode existir matéria sem tag, será um node "solto"
//
const listaMateriasPorTag = [
    {
        tag: "Computação",
        materias: [
            {
                origem: "Alura",
                materia: "Linguagem C",
                id_materia: 1
            },
            {
                origem: "Alura",
                materia: "Estrutura de Dados",
                id_materia: 3
            },
            {
                origem: null,
                materia: "Arquitetura de Computadores",
                id_materia: 4
            }
        ]
    },
    {
        tag: "Hardware",
        materias: [
            {
                origem: null,
                materia: "Arquitetura de Computadores",
                id_materia: 4
            },
            {
                origem: "IESB",
                materia: "Sistemas Digitais",
                id_materia: 5
            }
        ]
    },
    {
        tag: "Matemática",
        materias: [
            {
                origem: "IESB",
                materia: "Cálculo 2",
                id_materia: 2
            }
        ]
    },
    {
        tag: "Programação",
        materias: [
            {
                origem: "Alura",
                materia: "Linguagem C",
                id_materia: 1
            },
            {
                origem: "Alura",
                materia: "Estrutura de Dados",
                id_materia: 3
            }
        ]
    },
    {
        tag: null,
        materias: [
            {
                origem: "Alura",
                materia: "WebDesign",
                id_materia: 6
            }
        ]
    }
]

//arestas = conexoes um node a outro
//[[m1, m2], [m3, m2], [m1, m4]]
/*
Veja que, se m1 aponta para m2, m2 precisa apontar para m1 também
m1 => [m2, m4]
m2 => [m1, m3]
m3 => [m2]
m4 => [m1]
*/
const novoNo = { origem: 'IESB', materia: 'Sistemas Digitais', id_materia: 7 }
const arestas = criarListaDeArestas(listaMateriasPorTag);
//printarArestasFormaDeId(arestas);

const grafoMaterias = construirGrafo(arestas);
//console.log("Original: ", grafoMaterias);
//removerNoPorId(1, grafoMaterias);
//console.log("No Encontrado:", encontrarNoPorId(1, grafoMaterias));
//console.log("Arestas: ", arestas);
printarArestasFormaDeId(grafoMaterias);
printarGrafoFormaDeId(grafoMaterias);


/*
console.log(arestas[2][1])
console.log(arestas[3][0])
console.log(arestas[1][1])
console.log(arestas[2][1] == arestas[3][0]);
console.log(arestas[2][1] == arestas[1][1]);
console.log(arestas[1][1] == arestas[3][0]);
*/