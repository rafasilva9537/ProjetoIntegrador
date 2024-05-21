
let aulas = ['aula 1', 'aula 2', 'aula 3']
let bloco = d3.select("#content")

bloco.selectAll("div")
    .data(aulas)
    .enter()
    .append("div")
    .text((d, i) => d);

//Muda
//d3.select("rect").style("fill", "green")