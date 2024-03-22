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
![calendario](https://github.com/potatoo14/ProjetoIntegrador/assets/128054406/ff3ffd05-c7e6-44f5-9459-435b2b4d4f4b)



## Caderno:
Espaço para fazer anotações dentro de cada matéria. 
<br>
`(os elementos da página como a barra laterias etc serão menores, esse é apenas o rascunho)`
<br>
<br>
![rascunho do layout do caderno](https://github.com/potatoo14/ProjetoIntegrador/assets/128054406/968daf80-8783-4a6e-a21c-bac80b2a6867)



## Visão em tabela:
além de ver e organizar os conteúdos no calendário, será possível uma organização em tabela.
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
- visão de mês, semana e dia.
- filtro para matérias, tags,
  - Ordenação crescente e descrente
  - Filtro por data → data única, data inicial e final, a partir de certa data
  - Filtros por desempenho,  
- Possibilidade de criação de atividades no calendário tanto clicando no dia quanto editando as informações na tabela da matéria.
- Demonstrar visualmente se é aula, atividade ou revisão
- O usuário pode arrastar uma aula para uma nova data no calendário, mudando dinamicamente as datas.
- Automação de rotinas de estudo (estudo cíclico, etc).

## Caderno:
 - Anotações são flexíveis que terão suporte a:
   - formas geométrias
     - setas, linhas 
     - desenho (pincel com suavização de linhas)
   - texto digitado
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
        |Tópicos|   Status   |Desemepenho |  Data    | Revisão
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




<!--

============================================================================================= Anotações antigas ==================================================================================================

## Ferramentas essenciais (finalizar até 16 de junho):
- Rascunho do Desing:
  - ![Modelo do Desing](https://github.com/potatoo14/ProjetoIntegrador/assets/100155926/b3a37016-3ccd-4d58-a88c-d573eb045ad5)
- **Interface de matéria (banco de dados)**
  - Informações em sua maioria adicionadas pelo usuário. Será criada um template em branco para incluir as informações
  - Informações da matéria:
    - nome
    - capa
    - data de início - data de conclusão
    - tag (para filtrar matérias)
  - Informações de cada conteúdo:
    - Exemplo:
      |Tópicos|   Status   |Desemepenho |  Data    | Revisão
      |-------|------------|------------|----------|----------|
      |Aula 1 |Concluído   |⭐⭐⭐⭐⭐|22/03/2024|02/04/2024|
      |Aula 2 |Concluído   |⭐          |22/03/2024|21/03/2024|
      |Aula 3 |Em Andamento|             |22/03/2024|         |
      |Atv 1  |Não Iniciado|             |22/03/2024|         |
    - tópicos
      - aulas/conteúdos e atividades
    - datas das aula e atividades → `pensar em como será feita as atividades, no mesmo campo das aulas ou em uma página diferente`
      - data única
      - data início e fim
      - datas alternadas/vários dias não seguidos (24, 27, 31, 02, etc...)
    - revisões
    - conclusão (não iniciado, em andamento, conclúido) → `talvez exista uma forma melhor, como usar o desempenho registrando a conclusão?`
    - desempenho (bom, medio, ruim)
    - datas de revisões (derivado de data das aulas + desempenho) `sistema mais complexo?`[^1]
      - ruim: +1
      - medio: +5
      - bom: +10
    - tempo de estudos previsto
    - dias de estudo da semana para a matéria (seg, ter, qua, qui ...), `irrelevante no cronograma cíclico`
    - tags → para filtras matérias
  - Opções de filtro e ordenação para exibir aulas/conteúdos específicos
    - Ordenação crescente e descrente
    - Filtro por data → data única, data inicial e final, a partir de certa data
    - + Filtros por desempenho, 
    - etc (novas implementações podem ser adicionadas aqui) <br>
      **Elementos opcionais (para futura adições):**
  - Horas que poderá estudar para o ciclo de estudos (usada na automação do ciclo)
    <br><br>
      
- **Calendário (associado as matérias)**
  - Adição de matérias a partir do próprio calendário
  - Demonstrar visualmente se é aula, atividade ou revisão
  - O usuário pode arrastar uma aula para uma nova data no calendário. Mudança dinâmica de datas.
  - Calendário por MÊS e SEMANA
  - ADICIONEM MAIS COISAS por favor 😉

## Funções para adicionar:
- **Automação de Cronograma**
  - Botão de organizar datas, no calendário. Utilizar dias da semana que o aluno decidiu estudar para cada matéria e organiza automaticamente no calendário as datas.
    - Caso não especificado datas, podemos usar o conceito de repetição espaçada, organizando as matérias de maneira alternada (se hoje eu estudei essa matéria, amanhã não estudo ela) `Isso não é ciclo, a matéria é estudada totalmente naquele dia, sem se importar com horas de estudo`
  - Cronograma será flexível:
    - O aluno tendo algum imprevisto, pode pedir pra que seja reorganizada as datas.
    - Caso não queira empurrar aulas para frente no calendário, pode apenas arrastar a matéria atrasada de forma manual.
  - Dias sem estudo: evita colocar aulas, em dias especificados pelo usuário.
  <br><br>
    
- **Coleta de Datas das Matérias e Atividades do IESB**
  - `Ideia em planejamento, tudo aqui é um esboço ...`
  - Coletar automaticamente as datas das atividades Google Classrom e Blackboard para incluir no cronograma
  - Podemos utilizar o documento PDF do planejamento de estudo, levando em conta que sempre usa a mesma formatação, coletar o texto e extrair as datas e nomes das aulas para automatizar a inclusão nas matérias
  - _A ideia pode se estender para outras universidades baseado no seu padrão de organização das datas de aulas e atividades. Trabalho específico, não há necessidade de aplicar._
  <br><br>
    
- **Caderno de Notas** ~~Me ajudem a compeltar aqui porque eu cansei 😿~~
  - Elementos:
    - formas geométrias
    - setas, linhas 
    - desenho (pincel) → `pode gerar uma nova aplicação completa, tipo o samsung notes ou xournal`
     - suavização de linhas
    - texto digitado
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
    <br><br>
    
- **Ciclo de Estudos**
  - `em andamento ...`
<br><br>
    
- **Sistema de Notificações**
  - `em andamento ...`
<br><br>
 
- **Organização compartilhada**
  - `em andamento ...`
<br><br>

## Requisitos e responsabilidades (ainda há dúvidas):
<sub>❗ talvez seja preciso alguém transitar entre os dois ou ir completamente para o front end<sub/>
- Backend: JavaScript, NodeJS, ExpressJS, Banco de dados relacional (SQL).
  - [Samuel](https://github.com/potatoo14)
  - [Rafael](https://github.com/rafasilva9537)
  - Stefisson
  - [Ian Miranda](https://github.com/IanSil)
- Frontend: HTML, CSS, Javascript, React.
  - [Pedro Henrique](https://github.com/hsousr)
  - Davi

## Dúvidas:
1. Como será armazenado as datas. Em que formato?
3. SQL seria realmente o correto neste caso? Existe a possibilide de usar MongoDB ou um fake backend?
   - uso de ORM ou SQL puro? 
5. O pessoal do frontend terá que aprender muito sobre Javascript? É possível manter apenas como foco HTML e CSS nesta parte? Se sim, é o ideal?

## Rodapé
[^1]: Podemos criar um cronograma mais complexo, pois aprendizado não é linear, revisões podem ser feitas apenas estudando uma matéria seguinte. Exemplo, revisões de derivadas e limites acontecem naturalmente ao decorrer do curso de cálculo, pois são blocos base das matérias seguintes. É preciso pensar em alguma forma viável de aplicar isso.
-->
