# Problema a ser resolvido
Aplicações direcionadas a estudos estão causando uma distribuição de foco desnecessária para o estudante. Uma pessoa que necessita registrar notas/caderno e organizar um cronograma, por exemplo, acaba distribuíndo o foco em diversas aplicações. Mesmo algumas que permitem a implementação de certas funções ao mesmo tempo, como o Notion, acabam se tornando cansativas pela liberade excessiva e necessidade do usuário aprender de forma não intuitiva a utilizar o programa, inclusive, com certas limitações.
O objetivo é automatizar ao máximo trabalhos manuais como cadastrar matérias e organizar as datas de estudos e revisões, assim como implementar aplicação de caderno/notas em um mesmo ambiente.

# Cronograma organizador de estudos


Aplicação web para a matéria de projeto integrador.  
## Funções essenciais:
1.  Banco de Dados com cadastro de cada matéria, com informações como nome, data de início, aulas/conteúdos (contendo datas), desempenho (bom, medio, ruim), tempo de estudos previsto, dias de estudo para a matéria, etc (novas implementações podem ser adicionadas no futuro aqui).
2.  Calendário linkado ao banco de dados das matérias, que mostrará as datas das aulas.
    1. Poderá adicioinar as matérias a partir do proprio calendário.
4.  Seção/página para cada matéria. Demonstrará de forma visual o banco de dados para o usuário.
5.  Alteração/cadastro dinâmico de datas, podendo ser feito tanto pelo calendário quanto pela página da matéria. Uma alteração em um dos dois afeta o outro.
6.  Abstração do projeto: ![Abstração do projeto](https://github.com/potatoo14/ProjetoIntegrador/assets/100155926/771b6100-cb94-4cc5-8821-22e9576782b8)

## Funções para adicionar:
1.  Automação das datas baseado em quanto o aluno pretende estudar pra cada matéria e os dias da semana. Pode ser criado tipos de cronogramas diferentes de acordo com o aluno, mas inicialmente podemos colocar pensando em repetição espaçada, possibilitando cronograma fixo e estudo ciclico. Será preciso implementar os dois tipos funcionando juntos de forma orgânica.
2.  Cronograma será flexível, ou seja, o aluno tendo algum imprevisto, pode pedir pra que seja reorganizada as datas.
3.  Para cada aula, podemos colocar notas curtas relacionadas a elas.


## Requisitos:
- Backend: JavaScript, NodeJS, ExpressJS, Banco de dados relacional (SQL)
- Frontend: HTML, CSS, Javascript, React.

## Dúvidas:
1.  Como será armazenado as datas. Em que formato?
2.  Qual framework utilizar para o backend?
3.  O pessoal do frontend terá que aprender muito sobre Javascript? É possível manter apenas como foco HTML e CSS nesta parte? Se sim, é o ideal?
