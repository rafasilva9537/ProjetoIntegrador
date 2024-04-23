DROP TABLE IF EXISTS tb_tema;
DROP TABLE IF EXISTS tb_materia;
DROP TABLE IF EXISTS tb_tema_materia;

CREATE TABLE tb_tema(
	id_tema INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(250) UNIQUE,
	PRIMARY KEY (id_tema)
);

CREATE TABLE tb_materia(
	id_materia INT GENERATED ALWAYS AS IDENTITY,
	nome VARCHAR(250),
	data_inicio DATE,
	data_fim DATE,
	origem VARCHAR(250),
	PRIMARY KEY (id_materia)
);

CREATE TABLE tb_tema_materia(
	id_tema INT,
	id_materia INT,
	FOREIGN KEY (id_tema) REFERENCES tb_tema(id_tema),
	FOREIGN KEY (id_materia) REFERENCES tb_materia(id_materia)
);

--Testes
--Temas
INSERT INTO tb_tema(nome) VALUES ('Matemática'),('Programação')
INSERT INTO tb_tema(nome) VALUES ('Português'),('Química')

SELECT * FROM tb_tema
DELETE FROM tb_tema
WHERE nome = 'Matemática'

--Matérias
INSERT INTO tb_materia(nome, data_inicio) VALUES ('Linguagem C', '2024-01-23')