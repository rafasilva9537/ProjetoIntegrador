//GRAFO SERÁ NÃO DIRECIONAL, ou seja, tem sentido de ida e volta

//exemplo de tags com associação depois de query
//query necessaria para não ficar fazendo verificação em tags sem matéria
//null é necessário pois pode existir matéria sem tag, será um node "solto"
const tags = [
    {
        "nome_tag": null
    },
    {
        "nome_tag": "Matemática"
    },
    {
        "nome_tag": "Computação"
    },
    {
        "nome_tag": "Programação"
    }
]

//exemplo de lista apos a query
const materias = [
    {
        id_materia: 1,
        nome: "Linguagem C",
        nome_tag: "Computação"
    },
    {
        id_materia: 1,
        nome: "Linguagem C",
        nome_tag: "Programação"
    },
    {
        id_materia: 2,
        nome: "Cálculo II",
        nome_tag: "Matemática"
    },
    {
        id_materia: 16,
        nome: "Arquitetura de Software",
        nome_tag: "Computação"
    },
    {
        id_materia: 4,
        nome: "Estrutura de Dados",
        nome_tag: "Computação"
    },
    {
        id_materia: 4,
        nome: "Estrutura de Dados",
        nome_tag: "Matemática"
    },
    {
        id_materia: 4,
        nome: "Estrutura de Dados",
        nome_tag: "Programação"
    },
    {
        id_materia: 3,
        nome: "Sistema Digitais",
        nome_tag: null
    }
]

//arestas = conexoes um node a outro
//[[m1, m2], [[m3, m2]]
function criarArestas(listaDeMaterias, listaDeTags){
    const arestas = [];

    for (const tag of listaDeTags){
        for (const materia of listaDeMaterias){
            if(tag.nome_tag == materia.nome_tag){
                
            }
        }
    }
}

const grafo = new Map()
