// script que vai rodar com o ../index.js

axios.get('http://localhost:3000/materias')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

axios.post('/materias', {
  nome: "Sistema Digitais",
  data_inicio: "2023-07-01",
  data_fim: null,
  origem: "IESB"
})
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
