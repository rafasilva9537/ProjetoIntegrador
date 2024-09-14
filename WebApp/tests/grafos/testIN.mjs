//Verificando existência em lista
const listaAresta = [ 'Linguagem C', 'Estrutura de Dados' ];
console.log(listaAresta.includes('Linguagem C'))


//Teste de interações com Maps
const arr = [ 'foo', 'poo', 'too', 'testando' ];

const myMap = new Map();
myMap.set("bar", []);
myMap.get("bar").push("foo");
myMap.get("bar").push("poo");
myMap.get("bar").push("too");
myMap.get("bar").push("testando");

myMap.get("bar").splice(2,2);
console.log(myMap)


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
]

//Destructuring feature works by reference, and it's not copying the value. that means anytime we alter a value inside a variable that contains an object or array assigned via destructuring, also the original object or array will be affected.
const { materias } = listaMateriasPorTag[0];
console.log()


//Comparando referencias
const obj1 = { Teste: 'teste'}
const obj2 = obj1;
if(obj1 === obj2) console.log("IGUAIS")
else { console.log('DIFERENTES')}

const obj3 = { Teste: 'teste'}
const lista = [];
lista.push(obj3);
if(obj3 === lista[0]) console.log("IGUAIS")
else { console.log('DIFERENTES')}