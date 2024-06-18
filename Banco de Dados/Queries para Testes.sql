-- Queries para Teste
SELECT * FROM Tag;
SELECT * FROM Materia;
SELECT * FROM Materia_Tag;
SELECT * FROM Topico;
SELECT * FROM Data;
SELECT * FROM Topico_Data; 


-- Juntando tabelas
-- Como data já é primary key, não é preciso fazer join com tabela Data, tabela Topico_Data já guarda o valor
SELECT Topico_Data.*, Topico.*, Materia.nome
FROM Topico_Data
INNER JOIN Topico
	ON Topico_Data.id_topico = Topico.id_topico
INNER JOIN Materia
	ON Materia.id_materia = Topico.id_materia

SELECT Topico_Data.id_topico, ARRAY_AGG(Topico_Data.data), Topico.nome, Topico.desempenho, Topico.progresso, Materia.nome
FROM Topico_Data
INNER JOIN Topico
	ON Topico_Data.id_topico = Topico.id_topico
INNER JOIN Materia
	ON Materia.id_materia = Topico.id_materia
GROUP BY Topico_Data.id_topico, Materia.id_materia, Topico.nome, Topico.desempenho, Topico.progresso, Materia.nome

-- Agrupando tags em uma Matéria
SELECT Materia.id_materia AS id, Materia.nome, ARRAY_AGG(Materia_Tag.nome_tag) AS tags
FROM Materia
LEFT JOIN Materia_Tag
	ON Materia.id_materia = Materia_Tag.id_materia
GROUP BY Materia.id_materia

-- Função de Array para múltiplas tags em uma só linha
SELECT Materia_Tag.nome_tag, ARRAY_AGG(Materia.nome) AS materias
FROM Materia
LEFT JOIN Materia_Tag
	ON Materia.id_materia = Materia_Tag.id_materia
GROUP BY Materia_Tag.nome_tag
--


-- Testando uso de ROW_TO_JSON
SELECT ROW_TO_JSON(tagObj) AS idM_tag
FROM (
	SELECT Materia_Tag.id_materia, Materia_Tag.nome_tag
	FROM Materia_tag
	WHERE id_materia = 1
) tagObj;


-- Criando uma array de objetos
-- Precisar juntar as duas arrays abaixo em um objeto:
SELECT Materia_Tag.nome_tag, 
	ARRAY_AGG(
		(Materia.nome)
	) AS materias,
	ARRAY_AGG(
		(Materia.id_materia)
	) AS id_materias
FROM Materia
LEFT JOIN Materia_Tag
	ON Materia.id_materia = Materia_Tag.id_materia
GROUP BY Materia_Tag.nome_tag;
-- Juntando Arrays em Objeto:
-- Antes começava e tinha apenas SELECT Materia_Tag.nome_tag → por conta do group by
SELECT Materia_Tag.nome_tag, 
	JSONB_AGG(
        JSONB_BUILD_OBJECT('id', Materia.id_materia, 'materia', Materia.nome)
        ORDER BY Materia.id_materia
    ) AS materias
FROM Materia
LEFT JOIN Materia_Tag
    ON Materia.id_materia = Materia_Tag.id_materia
GROUP BY Materia_Tag.nome_tag;

-- Tags
DELETE FROM Materia_Tag WHERE id_materia = 2 AND nome_tag = 'Cálculo' RETURNING *;

SELECT EXISTS (SELECT * FROM Materia_Tag WHERE id_materia = 1)

SELECT * FROM Materia