CREATE TABLE dependente (
  idDependente INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome varchar(200) NOT NULL,
  dataNascimento DATE NOT NULL,
  fkColaborador INTEGER NOT NULL,
  FOREIGN KEY (fkColaborador) REFERENCES colaborador (idColaborador)
);

CREATE TABLE projeto (
  idProjeto INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  prazo INTEGER NOT NULL,
  orcamento DOUBLE(8,2) NOT NULL
);

CREATE TABLE alocacao (
idAlocacao INTEGER PRIMARY KEY AUTO_INCREMENT,
fkColaborador INTEGER NOT NULL,
fkProjeto INTEGER NOT NULL,
FOREIGN KEY (fkColaborador) REFERENCES colaborador (idColaborador),
FOREIGN KEY (fkProjeto) REFERENCES projeto (idProjeto)
);

insert into departamento (nome, descricao) values 
("RH", "Gerencia o pessoal"), 
("Finanças", "Responsável pelas finanças"), 
("TI ", "Lida com a tecnologia"),
("Vendas ", "Responsável pelas vendas"),
("Marketing ", "Faz o marketing");


INSERT INTO colaborador (nome, cpf, salario, telefone, dataNascimento, fkDepartamento) VALUES
('João Silva', '11122233344', 2500.00, '987654321', '1985-07-15', 1),
('Maria Santos', '44455566677', 3000.00, '123456789', '1990-05-22', 2),
('Pedro Souza', '77788899900', 3500.00, '987123654', '1988-11-30', 3),
('Ana Oliveira', '12345678901', 4000.00, '456789123', '1993-09-05', 4),
('Lucas Costa', '23456789012', 4500.00, '789123456', '1987-03-10', 5),
('Carolina Pereira', '34567890123', 5000.00, '321654987', '1991-08-18', 1),
('Rafael Mendes', '45678901234', 5500.00, '654987321', '1989-12-25', 2),
('Larissa Rocha', '56789012345', 6000.00, '987321654', '1995-04-02', 3),
('Marcos Santos', '67890123456', 6500.00, '147258369', '1994-06-12', 4),
('Juliana Costa', '78901234567', 7000.00, '258369147', '1992-10-20', 5);

INSERT INTO dependente (nome, dataNascimento, fkColaborador) VALUES
('Gabriela Pereira', '2002-10-12', 2),
('Rodrigo Almeida', '1998-05-15', 7),
('Isabela Lima', '1995-07-25', 3),
('André Santos', '1990-12-03', 9),
('Mariana Castro', '1993-09-28', 5),
('Rafael Oliveira', '1987-03-10', 10),
('Bruna Costa', '2001-08-21', 4),
('Felipe Sousa', '1996-11-14', 8),
('Camila Fernandes', '1994-04-29', 1),
('Gustavo Silva', '1999-06-07', 6),
('Júlia Rodrigues', '1992-02-18', 2),
('Daniel Souza', '1989-12-25', 7),
('Letícia Gonçalves', '1997-10-30', 3),
('Eduardo Miranda', '2000-09-06', 9),
('Carolina Ribeiro', '1991-07-17', 5);

INSERT INTO projeto (nome, prazo, orcamento) VALUES 
('CyberSphere', 60, 150250.40),
('DataTechX', 90, 200000.00),
('TechSprint', 45, 120000.00),
('InnovaTech', 180, 350000.00),
('CodeGenius', 120, 250000.00);

insert into alocacao (fkcolaborador, fkprojeto) values 
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5),
(1, 5),
(2, 5),
(3, 3),
(4, 3),
(5, 4),
(6, 4),
(7, 2),
(8, 2),
(9, 1),
(10, 1);

select * from alocacao order by fkcolaborador;

SELECT colaborador.nome, departamento.nome, projeto.nome
FROM colaborador
INNER JOIN alocacao
ON colaborador.idColaborador = alocacao.fkColaborador
INNER JOIN departamento
ON colaborador.fkDepartamento = departamento.idDepartamento
inner join projeto
ON alocacao.fkProjeto = projeto.idProjeto