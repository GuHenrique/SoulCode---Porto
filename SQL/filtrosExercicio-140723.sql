SELECT * FROM produto WHERE preco > 500;

SELECT * FROM produto WHERE preco BETWEEN 500 AND 1000;

SELECT * FROM produto WHERE fkVendedor = 7;

SELECT * FROM vendedor WHERE email like "%@hotmail%";

SELECT nome, preco, percentualDesconto, 
preco - (preco * percentualDesconto) AS "Preço com desconto" 
FROM produto WHERE fkVendedor = 1;

SELECT * FROM produto WHERE fkVendedor = 1;

SELECT * FROM vendedor WHERE year(dataNascimento) BETWEEN 1980 AND 1990;

SELECT * FROM produto WHERE fkCategoria in (2,3,4);

SELECT * FROM produto WHERE month(validadeDesconto) = month(CURDATE()) -1;

SELECT nome as "Nome", (year(NOW()) - year(dataNascimento)) as "Idade" FROM vendedor;

select * from produto order by validadeDesconto;

SELECT vendedor.nome "Vendedor", produto.descricao "Descrição", produto.preco "Preço", 
produto.nome "Produto", categoria.nome "Categoria", endereco.uf "Estado"
FROM produto
INNER JOIN vendedor ON produto.fkVendedor = vendedor.idVendedor
INNER JOIN categoria ON produto.fkCategoria = categoria.idCategoria
INNER JOIN endereco ON endereco.fkVendedor = vendedor.idVendedor
WHERE categoria.idCategoria = 1 AND endereco.uf = "SP";


-- Q1: Filtre os produtos cujo estoque está entre 200 e 800,
-- ordene por preco decrescente, e limite a 5 registros.
SELECT * FROM produto 
WHERE estoque BETWEEN 200 AND 800 
ORDER BY PRECO DESC 
LIMIT 5;

-- Q2: Exiba nome, sobrenome e data de nascimento
-- dos vendedores (renomear para aniversario), apenas os que nasceram entre 1993 e 1995,
-- ordene por nome (ordem crescente) e limite a 20.
SELECT nome, sobrenome, dataNascimento AS aniversario
FROM vendedor 
WHERE year(dataNascimento) BETWEEN 1993 AND 1995
ORDER BY nome
LIMIT 20;

-- Q3: Exiba nome, preco, lucro total (preco * estoque) da tabela produto.
-- Apenas os produtos com categoria 1, 2, 3 E com preço menor que 100.
-- Ordene por nome crescente
-- Limite a 100.
SELECT nome, preco, (preco * estoque) AS "lucro total"
FROM produto
WHERE fkCategoria in (1,2,3) AND preco < 100
ORDER BY nome
LIMIT 100;