# Problema a ser resolvido
Aplicações direcionadas a estudos estão causando uma distribuição de foco desnecessária para o estudante. Uma pessoa que necessita registrar notas/caderno e organizar um cronograma, por exemplo, acaba distribuíndo o foco em diversas aplicações. Mesmo algumas que permitem a implementação de certas funções ao mesmo tempo, como o Notion, acabam se tornando cansativas pela liberade excessiva e necessidade do usuário aprender de forma não intuitiva a utilizar o programa, inclusive, com certas limitações.

O objetivo é automatizar ao máximo trabalhos manuais como cadastrar matérias e organizar as datas de estudos e revisões, assim como implementar aplicação de caderno/notas em um mesmo ambiente. Novas implementações podem e DEVEM surgir ao decorrer do programa. Será criada uma plataforma All-in-one de organziação/estudos.


# Cronograma organizador de estudos
Aplicação web para a matéria de projeto integrador.

## Funções essenciais (finalizar até 16 de junho):
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
