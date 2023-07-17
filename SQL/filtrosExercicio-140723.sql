SELECT * FROM produto WHERE preco > 500;

SELECT * FROM produto WHERE preco > 500 AND preco < 1000;

SELECT * FROM produto WHERE fkVendedor = 7;

SELECT * FROM vendedor WHERE email like '%@hotmail%';

SELECT nome, descricao, preco, percentualDesconto, preco - (preco * percentualDesconto) AS 'Preço com desconto', fkVendedor FROM produto WHERE fkVendedor = '1';

SELECT * FROM produto WHERE fkVendedor = 1;

SELECT * FROM vendedor WHERE year(dataNascimento) BETWEEN "1980" AND "1990";

SELECT * FROM produto WHERE fkCategoria in (2,3,4);

SELECT * FROM produto WHERE month(validadeDesconto) < month(NOW());

SELECT (year(NOW()) - year(dataNascimento)) as idade FROM vendedor;

select * from produto order by validadeDesconto;

SELECT vendedor.nome "Vendedor", produto.descricao "Descrição", produto.preco "Preço", 
produto.nome "Produto", categoria.nome "Categoria", endereco.uf "Estado"
FROM produto
INNER JOIN vendedor ON produto.fkVendedor = vendedor.idVendedor
INNER JOIN categoria ON produto.fkCategoria = categoria.idCategoria
INNER JOIN endereco ON vendedor.idVendedor = endereco.fkVendedor
WHERE categoria.idCategoria = 1 AND endereco.uf = "SP";