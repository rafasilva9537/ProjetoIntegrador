-- Queries de Criação mySQL

DROP TABLE IF EXISTS Post_Category;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS Like_Comment;
DROP TABLE IF EXISTS Comment;
DROP TABLE IF EXISTS Saved_Post;
DROP TABLE IF EXISTS Post_Tag;
DROP TABLE IF EXISTS Like_Post;
DROP TABLE IF EXISTS Post;
DROP TABLE IF EXISTS Tag;
DROP TABLE IF EXISTS Profile;

CREATE TABLE Profile (
	profile_id int AUTO_INCREMENT,
	first_name varchar(50),
    last_name varchar(70),
    tag_user varchar(50) NOT NULL,
    email varchar(320) NOT NULL,
    phone_number char(13),
    PRIMARY KEY(profile_id)
);

CREATE TABLE Post (
	post_id int AUTO_INCREMENT,
    profile_id int NOT NULL,
    post_origin_id int DEFAULT NULL,
    created_date DATETIME,
    updated_date DATETIME DEFAULT NULL,
    post_text VARCHAR(300) NOT NULL,
    -- is there's a need to like counter?
    PRIMARY KEY (post_id),
    FOREIGN KEY (profile_id) REFERENCES Profile(profile_id),
    FOREIGN KEY (post_origin_id) REFERENCES Post(post_id)
);

CREATE TABLE Like_Post (
	like_post_id int AUTO_INCREMENT,
	profile_id int,
	post_id int NOT NULL,
	PRIMARY KEY (like_post_id),
	FOREIGN KEY (profile_id) REFERENCES Profile(profile_id)
		ON DELETE CASCADE,
	FOREIGN KEY (post_id) REFERENCES Post(post_id)
		ON DELETE CASCADE
);

CREATE TABLE Tag (
	name varchar(20),
    PRIMARY KEY(name)
);

CREATE TABLE Post_Tag (
	post_id int AUTO_INCREMENT,
    tag_name varchar(20),
    PRIMARY KEY(post_id, tag_name),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (tag_name) REFERENCES Tag(name)
);

CREATE TABLE Category (
	name varchar(30),
    PRIMARY KEY(name)
);

CREATE TABLE Post_Category (
	post_id int,
    tag_name varchar(20),
    PRIMARY KEY(post_id, tag_name),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (tag_name) REFERENCES Tag(name)
);

CREATE TABLE Comment (
	comment_id int AUTO_INCREMENT,
    post_id int NOT NULL,
    created_date DATETIME NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id)
		ON DELETE CASCADE
);

CREATE TABLE Like_Comment (
	like_comment_id int AUTO_INCREMENT,
	profile_id int NOT NULL,
    comment_id int NOT NULL,
	PRIMARY KEY (like_comment_id),
	FOREIGN KEY (profile_id) REFERENCES Profile(profile_id) 
		ON DELETE CASCADE,
	FOREIGN KEY (comment_id) REFERENCES Comment(comment_id) 
		ON DELETE CASCADE
);

CREATE TABLE Saved_Post (
	profile_id int,
	post_id int,
	PRIMARY KEY(profile_id, post_id),
	FOREIGN KEY (profile_id) REFERENCES Profile(profile_id)
		ON DELETE CASCADE,
	FOREIGN KEY (post_id) REFERENCES Post(post_id)
		ON DELETE CASCADE
);

INSERT INTO Profile(first_name, last_name, tag_user, email, phone_number) VALUES
('Ana', 'Silva', 'ana_silva', 'ana.silva@email.com', '5511998765432'),
('Carlos', 'Pereira', 'carlos_p', 'carlos.pereira@email.com', '5511976543210'),
('Fernanda', 'Oliveira', 'fernanda_oliveira', 'fernanda.oliveira@email.com', '5511999988776'),
('Bruno', 'Souza', 'bruno_souza', 'bruno.souza@email.com', '5511965432109'),
('Mariana', 'Lima', 'mariana_lima', 'mariana.lima@email.com', '5511997766554'),
('Lucas', 'Alves', 'lucas_a', 'lucas.alves@email.com', '5511943215678'),
('Juliana', 'Ferreira', 'juliana_f', 'juliana.ferreira@email.com', '5511987654321'),
('Pedro', 'Gonçalves', 'pedro_g', 'pedro.goncalves@email.com', '5511932109876'),
('Gabriela', 'Santos', 'gabi_santos', 'gabriela.santos@email.com', '5511956781234'),
('Thiago', 'Rocha', 'thiago_rocha', 'thiago.rocha@email.com', '5511923456789'),
('Larissa', 'Costa', 'larissa_c', 'larissa.costa@email.com', '5511912345678'),
('Rafael', 'Mendes', 'rafael_m', 'rafael.mendes@email.com', '5511998765432'),
('Camila', 'Castro', 'camila_castro', 'camila.castro@email.com', '5511967854321'),
('Felipe', 'Martins', 'felipe_m', 'felipe.martins@email.com', '5511987632109'),
('Isabela', 'Barbosa', 'isabela_b', 'isabela.barbosa@email.com', '5511976543211');

INSERT INTO Tag VALUES
('Vida pessoal'),
('Vida Profissional'),
('Saúde'),
('Esportes'),
('Games'),
('Casa'),
('Animais'),
('Celebridades'),
('Cinema'),
('Concursos'),
('Vendas'),
('Carros'),
('Tecnologia'),
('Política'),
('Educação');

INSERT INTO Post (profile_id, post_origin_id, created_date, updated_date, post_text) VALUES 
(1, NULL, '2025-01-01 23:59:59', NULL, 'De férias em miami beach!'),
(2, NULL, '2025-04-15 00:05:34', '2025-01-01 00:05:34', 'Olá!!'),
(3, NULL, '2025-05-29 12:56:00', '2025-05-29 12:56:00', 'Você vem sempre aqui ?'),
(4, NULL, '2023-12-31 23:50:56', '2023-12-31 23:50:56', 'Ano novo, novas dívidas'),
(5, NULL, '2021-10-02 08:30:45', '2021-10-02 08:30:45', 'Essa é minha primeira publicação'),
(6, NULL, '2025-11-22 18:30:55', NULL, 'Publi nova no feed'),
(7, NULL, '2022-09-12 19:30:15', '2022-09-12 19:30:15', 'Hoje meu cachorro nasceu'),
(8, NULL, '2021-08-18 12:08:11', '2021-08-18 12:08:11', 'Dia de sol'), 
(9, NULL, '2024-09-12 08:16:01', NULL, 'Muitas mensagens hoje'),
(10, NULL, '2024-05-22 14:29:45', NULL, 'Se gostou não esquece de curtir'),
(11, NULL, '2021-10-02 08:30:45', NULL, 'Somos novos por aqui'),
(12, NULL, '2022-09-12 19:30:15', '2022-09-12 19:30:15', 'Tudo calmo e tranquilo'),
(13, NULL, '2020-08-12 07:15:00', '2020-08-12 07:15:00', 'Aula de phyton'),
(14, NULL, '2024-11-02 20:39:37', '2024-11-02 20:39:37', 'Vagas para preparatório de Power BI'),
(15, NULL, '2024-03-07 10:02:49', '2024-03-07 10:02:49', 'Vende-se Placa de vídeo'),
(14, 15, '2024-03-07 12:02:49', '2024-03-07 10:02:49', 'Olha o estado disso ...');

INSERT INTO Post_Tag (post_id, tag_name) VALUES 
(1, 'Vida pessoal'),
(2, 'Vida Profissional'),
(3, 'Saúde'),
(4, 'Esportes'),
(5, 'Games'),
(6, 'Casa'),
(7, 'Animais'),
(8, 'Celebridades'),
(9, 'Cinema'),
(10, 'Concursos'),
(11, 'Vendas'),
(12, 'Carros'),
(13, 'Tecnologia'),
(14, 'Política'),
(15, 'Educação');

INSERT INTO Comment (post_id, created_date) VALUES 
(1, NOW()),
(2, NOW()),
(3, NOW()),
(4, NOW()),
(5, NOW()),
(6, NOW()),
(7, NOW()),
(8, NOW()),
(9, NOW()),
(10, NOW()),
(11, NOW()),
(12, NOW()),
(13, NOW()),
(14, NOW()),
(15, NOW());

INSERT INTO Saved_Post(profile_id, post_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);

INSERT INTO Like_Post (profile_id, post_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);

INSERT INTO Like_Comment (profile_id, comment_id) VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);


