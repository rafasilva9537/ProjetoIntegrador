//GRAFO SERÁ NÃO DIRECIONAL, ou seja, tem sentido de ida e volta

/*
const arestas = [
    [m1, m2], 
    [m3, m2],
    [m3, m1],
]
*/
function arestaExiste(aresta, listaArestas){
    //grafom bidirecional
    //como a ordem não importa, é preciso verificar os dois casos
    const tamanho = listaArestas.length;

    for(let i = 0; i < (tamanho-1); i++){
        if(listaArestas[i] === aresta[0] && listaArestas[i+1] === aresta[1]) return true;
        if(listaArestas[i+1] === aresta[0] && listaArestas[i] === aresta[1]) return true;
    }
    return false;
}

function criarArestas(listaArestas){
    for (const tagMaterias of listaArestas){
        const {materias} = tagMaterias;
        console.log(tagMaterias);
    
        for(let i = 0; i < (materias.length-1); i++){
            for(let j = i+1; j < (materias.length); j++){
                let atualAresta = [materias[i], materias[j]];

                //if(arestaExiste(atualAresta, listaArestas)) continue;
                console.log(arestaExiste(atualAresta, listaArestas))
                listaArestas.push(atualAresta);
            }
        }
    }
}

//null é necessário pois pode existir matéria sem tag, será um node "solto"
const listaMateriasPorTag = [
    {
        nome_tag: null,
        materias: ["Sistema Digitais", "WebDesign"]
    },
    {
        nome_tag: "Matemática",
        materias: ["Cálculo 2", "Algebra com Python"]
    },
    {
        nome_tag: "Computação",
        materias: ["Linguagem C", "Algebra com Python", "Estrutura de Dados"]
    },
    {
        nome_tag: "Programação",
        materias: [ "Linguagem C", "Estrutura de Dados"]
    }
]

//arestas = conexoes um node a outro
//[[m1, m2], [m3, m2]]
const arestas = []
criarArestas(listaMateriasPorTag);


console.log(arestas);
console.log(arestas.includes('Sitema Digitais'));