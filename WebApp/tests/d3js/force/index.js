class Materia {
    constructor(id, nome) {
        this.nome = nome;
        this.idMateria = id;
    }

    printarMat() {
        console.log(`Id: ${this.idMateria} - Nome: ${this.nome}`);
    }
}

const m1 = new Materia(1, "M1");
const m2 = new Materia(2, "M2");
const m3 = new Materia(3, "M3");
const m4 = new Materia(4, "M4");

const grafo = new Map([
    [m1, [m4, m2]],
    [m2, [m1]],
    [m3, []],
    [m4, [m1]]
]);

// Transformar o Map em nodes e links
const nodes = Array.from(grafo.keys()).map(materia => ({
    id: materia.idMateria,
    name: materia.nome
}));

const links = [];
grafo.forEach((value, key) => {
    value.forEach(target => {
        links.push({
            source: key.idMateria,
            target: target.idMateria
        });
    });
});