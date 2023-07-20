-- PLAYLISTS DETERMINADA PELO ID DO USUÁRIO:
SELECT * FROM playlist WHERE fkUsuario = 2;

-- MÚSICAS FAVORITAS DETERMINADO PELO ID DE UM USUÁRIO: 
SELECT u.nome AS usuario, m.titulo AS musica, a.nome 
FROM musica m
	JOIN usuario_musica um ON m.idMusica = um.fkMusica
	JOIN usuario u ON u.idUsuario = um.fkUsuario
	JOIN artista a ON a.idArtista = m.fkArtista
WHERE u.idUsuario = 2;


-- NOME DAS MUSICAS QUE EXISTEM NA PLAYLIST DO USUARIO [IDUSUARIO]:
	SELECT m.titulo AS titulo_musica, 
    p.titulo AS titulo_playlist, 
    p.descricao as descricao_playlist
	FROM musica m
		JOIN playlist_musica pm ON pm.fkmusica = m.idmusica
		JOIN playlist p ON p.idPlaylist = pm.fkPlaylist
	WHERE idPlaylist = 2;

-- QUAIS AS MUSICAS DE UM DETERMINADO CANTOR PELO NOME;
SELECT m.titulo, a.nome
FROM musica m
	JOIN artista a ON m.fkArtista = a.idArtista
WHERE a.nome = "Adele";

-- NOME DAS MUSICAS, E ALBUNS DE UM DETERMINADO ARTISTA
SELECT m.titulo AS musica, g.nome AS genero, al.titulo AS album, a.nome AS artista
FROM musica m
	JOIN album al ON m.fkAlbum = al.idAlbum
	JOIN artista a ON m.fkArtista = a.idArtista
	JOIN genero g ON m.fkgenero = g.idgenero
WHERE a.nome = "Adele";

-- QUANTIDADE DE MÚSICAS FAVORITADAS POR UM DETERMINADO USUÁRIO

SELECT u.nome, COUNT(*) AS qnt_musica
FROM usuario_musica AS um
	JOIN usuario AS u ON um.fkUsuario = u.idUsuario
	JOIN musica AS m ON um.fkMusica = m.idMusica
WHERE u.idUsuario = 2;


-- ATUALIZAR A DURAÇÃO TOTAL DO ALBUM
	-- CASO QUEIRA MUDAR A DURAÇAO DE UMA MUSICA PARA TESTES
	UPDATE musica SET duracao = 120 WHERE idMusica = 1 AND fkAlbum = 1;
	SELECT * FROM musica WHERE fkAlbum = 1;
    SELECT * FROM album WHERE idAlbum = 1;
    
UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 1)
WHERE idAlbum = 1;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 2)
WHERE idAlbum = 2;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 3)
WHERE idAlbum = 3;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 4)
WHERE idAlbum = 4;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 5)
WHERE idAlbum = 5;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 6)
WHERE idAlbum = 6;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 7)
WHERE idAlbum = 7;

UPDATE album SET duracaoTotal = 
(SELECT SUM(duracao) FROM musica WHERE fkAlbum = 8)
WHERE idAlbum = 8;


-- MEDIA DE DURACAO TOTAL DE TODOS OS ALBUNS
SELECT ROUND(AVG(duracaoTotal),2) FROM album;

-- QUANTIDADE DE PLAYLISTS CRIADAS NO ANO PASSADO
SELECT * FROM playlist WHERE YEAR(dataCriacao) = YEAR(NOW()) - 1;

-- IDADE DE TODOS OS USUÁRIOS
SELECT nome, dataNascimento, TIMESTAMPDIFF(YEAR, dataNascimento, CURDATE()) as idade FROM usuario;

-- DELETA PLAYLIST CRIADA PELO USUÁRIO: 
	 -- NECESSÁRIO O USO DE DOIS DELETES, POIS A PK DA TABELA playlist ESTÁ SENDO REFERENCIADA NA TABELA playlist_musica, 
	 -- SENDO ASSIM, É  NECESSÁRIO DELETAR PRIMEIRO A REFERENCIA PARA DEPOIS DELETAR EM SI A PLAYLIST CRIADA PELO USUÁRIO
     
DELETE FROM playlist_musica WHERE fkPlaylist = 1;
DELETE FROM  playlist WHERE fkUsuario = 1;
