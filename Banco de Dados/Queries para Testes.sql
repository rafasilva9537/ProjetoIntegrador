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