SELECT * FROM COLABORADOR;

UPDATE colaborador SET
salario = 8000.00
WHERE idColaborador = 9;

select * from endereco;

insert into endereco values(
null, 
"São Paulo", 
"SP", 
"Avenida Marque de São Vicente", 
101, 
"Ao lado da universidade", 
11);

delete from endereco
where idendereco = 2;

delete from colaborador
where idColaborador = 3;

delete from departamento
where idDepartamento = 2;