DROP TABLE IF EXISTS Topico_Data;
DROP TABLE IF EXISTS Topico;
DROP TABLE IF EXISTS Data;
DROP TABLE IF EXISTS Materia_Tag;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Materia;

--CRIAÇÃO
CREATE TABLE Tag(
	id_tag INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(250) UNIQUE NOT NULL,
	PRIMARY KEY (id_tag)
);

CREATE TABLE Materia(
	id_materia INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(250),
	data_inicio DATE,
	data_fim DATE,
	origem VARCHAR(250),
	PRIMARY KEY (id_materia)
);

CREATE TABLE Materia_Tag(
	id_materia INT NOT NULL,
	id_tag INT NOT NULL,
	FOREIGN KEY (id_materia) REFERENCES Materia(id_materia),
	FOREIGN KEY (id_tag) REFERENCES Tag(id_tag)
);

CREATE TABLE Topico(
	id_topico INT GENERATED ALWAYS AS IDENTITY,
	id_materia INT NOT NULL,
	nome VARCHAR(250),
	-- definir como número em vez de palavra abre a possibilidade de analisar médias e fazer outros cálculos
	desempenho NUMERIC(3,1) CHECK(desempenho >= 0 and desempenho <= 10),
	progresso VARCHAR CHECK(progresso IN('não iniciado', 'em andamento', 'finalizado')), -- delimita as três opções
	PRIMARY KEY(id_topico),
	FOREIGN KEY(id_materia) REFERENCES Materia(id_materia)
);

CREATE TABLE Data(
	data DATE PRIMARY KEY -- (data é única e não pode ser NULL, logo pode ser usada como primary key)
	-- talvez seja adicionado novas colunas, como horas ...
);

CREATE TABLE Topico_Data(
	id_topico INT NOT NULL,
	data DATE NOT NULL,
	FOREIGN KEY (id_topico) REFERENCES Topico(id_topico),
	FOREIGN KEY (data) REFERENCES Data(data)
);

SELECT * FROM Tag;
SELECT * FROM Materia;
SELECT * FROM Materia_Tag;
SELECT * FROM Topico;
SELECT * FROM Data;
SELECT * FROM Topico_Data; 



--Testes
--Tags
INSERT INTO Tag(nome) VALUES ('Matemática'),('Programação');
INSERT INTO Tag(nome) VALUES ('Português'),('Química');


--Matérias
INSERT INTO Materia(nome, data_inicio) VALUES ('Linguagem C', '2024-01-23');


--Materia_Tag
-- Implementação de Entidade Associativa (nesse caso, os nomes devem ser únicos)
INSERT INTO Materia_Tag VALUES ((SELECT id_materia FROM Materia WHERE nome = 'Linguagem C'),
							   (SELECT id_tag FROM Tag WHERE nome = 'Programação'));
		
		
--Topicos
--DELETE FROM Topico WHERE id_materia = 2;
INSERT INTO Topico(id_materia, nome, desempenho, progresso) 
VALUES((SELECT id_materia FROM Materia WHERE nome = 'Linguagem C'), 'Tipo de Variáveis', 7.3, 'não iniciado');

/*INSERT INTO Topico(id_materia, nome, desempenho, progresso)
VALUES(2, 'Matrizes', -33, 'iniciado'); --violação de restrição*/


-- Datas
INSERT INTO Data VALUES ('2024-04-23'), ('2024-04-24'), ('2024-04-25');


-- Topico_Data
-- Veja que a implementação permite adicionar mais de uma data para um tópico
INSERT INTO Topico_Data VALUES((SELECT id_topico FROM Topico WHERE nome = 'Tipo de Variáveis'), '2024-04-23');
INSERT INTO Topico_Data VALUES((SELECT id_topico FROM Topico WHERE nome = 'Tipo de Variáveis'), '2024-04-24');


-- Juntando tabelas
-- Como data já é primary key, não é preciso fazer join com tabela Data, tabela Topico_Data já guarda o valor
SELECT * 
FROM Topico_Data
INNER JOIN Topico
	ON Topico_Data.id_topico = Topico.id_topico