/*
m1 => [m2, m4]
m2 => [m1, m3, m4]
m3 => [m2]
m4 => [m1, m2]
*/

class Materia {
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }

    printarMat(){
        console.log(`Id: ${this.id} - Nome: ${this.nome}`)
    }
}

const m1 = new Materia(1, "M1");
const m2 = new Materia(2, "M2");
const m3 = new Materia(3, "M3");
const m4 = new Materia(4, "M4");

const arestas = [
    [m1, m2],
    [m2, m3],
    [m2, m4],
    [m1, m4]
]

const grafo = new Map([
    [m1, [m2, m4]],
    [m2, [m1, m3, m4]],
    [m3, [m2]],
    [m4, [m1, m2]]
])

console.log(arestas)