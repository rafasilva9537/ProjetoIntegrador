--COPIE TUDO!!!

--OBSERVAÇÕES:
--Avaliar a necessidade de trocar o tipo DATE para TIMESTAMPTZ, pois dependendo da localidade do usuário, o dia pode ser anterior ou superior ao do Brasil
--Em javascript, o objeto do tipo Date já está em tempo UTC


DROP TABLE IF EXISTS Topico_Data;
DROP TABLE IF EXISTS Topico;
DROP TABLE IF EXISTS Data;
DROP TABLE IF EXISTS Materia_Tag;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Materia;

--CRIAÇÃO
CREATE TABLE Tag(
	nome VARCHAR(250),
	PRIMARY KEY (nome)
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
	id_materia INT,
	nome_tag VARCHAR(250),
	FOREIGN KEY (id_materia) REFERENCES Materia(id_materia),
	FOREIGN KEY (nome_tag) REFERENCES Tag(nome),
	PRIMARY KEY(id_materia, nome_tag)
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
	FOREIGN KEY (data) REFERENCES Data(data),
	PRIMARY KEY(id_topico, data)
);



--Inserções
--Tags
INSERT INTO Tag(nome) VALUES ('Matemática'),('Programação'),('Português'),('Química'),('Web'), ('Computação'), ('Hardware');


--Matérias
INSERT INTO Materia(nome, data_inicio, data_fim, origem) VALUES 
('Linguagem C', '2024-01-23', null, 'Alura'), 
('Cálculo 2', '2024-01-29', null, 'IESB'), 
('Estrutura de Dados', '2024-01-13', '2024-02-13', 'Alura'),
('Arquitetura de Computadores', null, null, null), 
('Sistemas Digitais', '2024-01-29', null, 'IESB'), 
('WebDesign', '2024-01-13', '2024-02-13', 'Alura');


-- Datas
INSERT INTO Data VALUES ('2024-04-23'), ('2024-04-24'), ('2024-04-25');


--Materia_Tag
-- Implementação de Entidade Associativa (nesse caso, os nomes devem ser únicos)
INSERT INTO Materia_Tag(id_materia, nome_tag) VALUES 
(1, 'Computação'), (1, 'Programação'), 
(2, 'Matemática'), 
(3, 'Computação'), (3, 'Programação'), 
(4, 'Computação'),(4, 'Hardware'),
(5, 'Hardware');
-- 6 não tem tag 


--Topicos
-- Linguagem C
INSERT INTO Topico(id_materia, nome, desempenho, progresso) 
VALUES (1, 'Tipo de Variáveis', 7.3, 'em andamento'), (2, 'Funções', 8, 'não iniciado');
--Cálculo 2
INSERT INTO Topico(id_materia, nome, desempenho, progresso)
VALUES (2, 'Derivada Parcial', 9, 'não iniciado');


-- Topico_Data
-- Veja que a implementação permite adicionar mais de uma data para um tópico
-- Tópicos de Linguagem C e Cálculo 2
INSERT INTO Topico_Data VALUES(1, '2024-04-23'), (1, '2024-04-24');
INSERT INTO Topico_Data VALUES(2, '2024-04-25');
