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
SELECT m.titulo AS musica, al.titulo AS album, a.nome AS artista
FROM musica m
JOIN album al ON m.fkAlbum = al.idAlbum
JOIN artista a ON m.fkArtista = a.idArtista
WHERE al.idAlbum = 2;

select * from musica;




