# Problema a ser resolvido
_Quando os estudantes se preparam para organizar sua rotina de estudos hoje em dia, eles se deparam com uma infinidade de opções de aplicações de estudo. Uma pessoa que necessita registrar anotações e organizar seu calendário, por exemplo, acaba tendo que utilizar diversas aplicações, além de utilizar caderno, computador, tablets e celulares. Essa situação causa uma distribuição de foco desnecessária para o estudante, o que acaba tornando a rotina de estudos complexa e ineficiente._

O objetivo deste projeto é implementar uma solução que diminua a complexidade na rotina de estudos dos estudantes de hoje em dia, trazendo uma aplicação multiplataforma que seja simples e eficiente e que junte todas as ferramentas necessárias para o dia-a-dia do estudante em um só lugar.

**Para este semestre, será feita apenas a parte do calendário.**

<br>
<br>

# A aplicação terá as seguintes ferramentas:

## Calendário:

Calendário mostrando as matérias que precisam ser estudadas em cada dia, podendo ter visão de mês, semana e dia.
<br>
(to-do: colocar rascunho do calendário para melhor exemplificação. imagem meramente ilustrativa)
![calendário](https://github.com/potatoo14/ProjetoIntegrador/assets/128054406/ff3ffd05-c7e6-44f5-9459-435b2b4d4f4b)



## Caderno:
Espaço para fazer anotações dentro de cada matéria. 
<br>
`(os elementos da página como a barra laterias etc serão menores, esse é apenas o rascunho)`
<br>
<br>
![rascunho do layout do caderno](https://github.com/potatoo14/ProjetoIntegrador/assets/128054406/968daf80-8783-4a6e-a21c-bac80b2a6867)



## Visão em tabela:
Além de ver e organizar os conteúdos no calendário, será possível uma organização em tabela.
<br>
(colocar imagem do rascunho. Imagem meramente ilustrativa)
![tabela](https://github.com/potatoo14/ProjetoIntegrador/assets/128054406/19d1a081-92bf-4cde-8cf9-dbc4f399e2a8)


<br>
<br>
<br>
<br>
<br>

# O que deverá ser implementado:

## Calendário:
- Visão de mês, semana e dia.
- Filtro para matérias, tags,
  - Ordenação crescente e descrente
  - Filtro por data → data única, data inicial e final, a partir de certa data
  - Filtros por desempenho,  
- Possibilidade de criação de atividades no calendário tanto clicando no dia quanto editando as informações na tabela da matéria.
- Demonstrar visualmente se é aula, atividade ou revisão
- O usuário pode arrastar uma aula para uma nova data no calendário, mudando dinamicamente as datas.
- Automação de rotinas de estudo (estudo cíclico, etc).

## Caderno:
 - Anotações são flexíveis que terão suporte a:
   - Formas geométricas
     - Setas, linhas 
     - Desenho (pincel com suavização de linhas)
   - Texto digitado
     - modo livre, digita aonde quiser, sem linhas prendendo o texto
     - modo fixo, o texto segue o padrão word/documents, limitado a linhas, margens, rodapés, etc.
     - marcação (negrito, itálico, sublinhado, parágrafo, citação, etc ...) `será melhor organizado no futuro`
   - modelos de página `(decidir se será infinito ou divido por folha A4)`
     1. Quadriculado
     2. Folha Pautada `a digitação no teclado pode ou não acompanhar as linhas da folha`
     3. Folha Branca
   - símbolos matemáticos
   - Anotações integradas a PDFs
       - procura de texto
      - marcação de texto
 - Existirão anotações de cada tópico do conteúdo e uma visão geral, que juntara todas as anotações em uma só visão.
 - será possível reorganizar a ordem das anotações.

## Visão em tabela:
- filtro.


## Cadastro de matérias:
- As matérias poderão ser cadastradas manualmente pelo aluno, onde serão preenchidas informações como nome, tags, dias de estudo, status (concluído, em progresso) e desempenho.
  (colocar imagem para representar o cadastro)
  - As anotações serão feitas por conteúdo, que estarão contidas em uma matéria
    - Exemplo das informações sobre os conteúdos:
        |Tópicos|   Status   |Desempenho |  Data    | Revisão
        |-------|------------|------------|----------|----------|
        |Aula 1 |Concluído   |⭐⭐⭐⭐⭐|22/03/2024|02/04/2024|
        |Aula 2 |Concluído   |⭐          |22/03/2024|21/03/2024|
        |Aula 3 |Em Andamento|             |22/03/2024|         |
        |Atv 1  |Não Iniciado|             |22/03/2024|         |
    
- As matérias poderão ser cadastradas automaticamente por meio de integrações com plataformas como o calendário do google.
- As matérias poderão ter uma capa e um ícone colocados pelo anulo pra ficar bonito.


## Banco de dados:
- Montar o modelo.
- utilização de banco relacional.

## Automação de Cronograma:
  - Botão de organizar datas, no calendário. Utilizar dias da semana que o aluno decidiu estudar para cada matéria e organiza automaticamente no calendário as datas.
    - Caso não especificado datas, podemos usar o conceito de repetição espaçada, organizando as matérias de maneira alternada (se hoje eu estudei essa matéria, amanhã não estudo ela)
  - Dias sem estudo: evita colocar aulas, em dias especificados pelo usuário.

## Sistema de notificações:
- Lembretes de datas limites?
- Relógio pomodoro simples?




