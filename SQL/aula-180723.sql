CREATE DATABASE companhias_db;

USE companhias_db;

CREATE TABLE companhia(
    idCompanhia INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cidade VARCHAR(80) NOT NULL,
    pais VARCHAR(2) NOT NULL,
    lucro DOUBLE NOT NULL,
    filiais INTEGER NOT NULL,
    ramo VARCHAR(30) NOT NULL
);

INSERT INTO companhia (nome, cidade, pais, lucro, filiais, ramo) VALUES
('Engenex', 'São Paulo', 'BR', 1000000.00, 3, 'Engenharia'),
('TechMed', 'Rio de Janeiro', 'BR', 500000.50, 2, 'Saúde'),
('InnoTech', 'Nova York', 'US', 2000000.75, 5, 'Tecnologia'),
('EvoEng', 'Londres', 'UK', 1500000.25, 4, 'Engenharia'),
('HealthWave', 'Berlim', 'DE', 800000.90, 1, 'Saúde'),
('InnovaHealth', 'Paris', 'FR', 1200000.60, 3, 'Saúde'),
('DigitalEng', 'Toronto', 'CA', 900000.40, 2, 'Engenharia'),
('TechCare', 'São Francisco', 'US', 3000000.80, 6, 'Saúde'),
('TechSolutions', 'Sydney', 'AU', 2500000.70, 4, 'Tecnologia'),
('EngiCore', 'Tóquio', 'JP', 1800000.45, 3, 'Engenharia'),
('MedInno', 'Madri', 'ES', 600000.30, 2, 'Saúde'),
('ElevateHealth', 'Cidade do México', 'MX', 700000.35, 2, 'Saúde'),
('EngiTech', 'Moscou', 'RU', 400000.20, 1, 'Engenharia'),
('TechWellness', 'Lisboa', 'PT', 1500000.55, 3, 'Saúde'),
('EngiSolutions', 'Chicago', 'US', 2800000.65, 5, 'Engenharia'),
('ApexHealth', 'Melbourne', 'AU', 1100000.50, 3, 'Saúde'),
('MindCare', 'Nova Delhi', 'IN', 500000.25, 2, 'Saúde'),
('TechMedic', 'Bangcoc', 'TH', 900000.60, 2, 'Saúde'),
('InnoTech', 'Amsterdã', 'NL', 1200000.75, 4, 'Tecnologia'),
('EngiPro', 'Seul', 'KR', 750000.40, 3, 'Engenharia'),
('HealthSolutions', 'Cidade do Cabo', 'ZA', 650000.35, 2, 'Saúde'),
('TechWell', 'Miami', 'US', 1400000.55, 4, 'Tecnologia'),
('AgileEng', 'São Petersburgo', 'RU', 950000.30, 2, 'Engenharia'),
('EngiCorp', 'Toronto', 'CA', 2200000.70, 5, 'Engenharia'),
('TechGen', 'Xangai', 'CN', 1800000.65, 4, 'Tecnologia'),
('FutureHealth', 'Sidney', 'AU', 400000.20, 1, 'Saúde'),
('MindTech', 'Cidade do México', 'MX', 1000000.40, 3, 'Tecnologia'),
('EngiSys', 'Mumbai', 'IN', 3000000.75, 6, 'Engenharia'),
('TechEng', 'Bangalore', 'IN', 700000.30, 2, 'Engenharia'),
('HealthTech', 'Pequim', 'CN', 2500000.60, 4, 'Saúde'),
('EvoMed', 'São Francisco', 'US', 600000.50, 2, 'Saúde'),
('InnoHealth', 'Cairo', 'EG', 350000.25, 1, 'Saúde'),
('DigitalEng', 'Hamburgo', 'DE', 1800000.70, 4, 'Engenharia'),
('TechMed', 'Cidade do Cabo', 'ZA', 1200000.35, 3, 'Saúde'),
('EngiCode', 'Los Angeles', 'US', 900000.45, 2, 'Engenharia'),
('TechMed', 'Vancouver', 'CA', 500000.20, 1, 'Saúde'),
('EngiWave', 'Pequim', 'CN', 700000.40, 2, 'Engenharia'),
('HealthSolutions', 'Munique', 'DE', 1500000.55, 3, 'Saúde'),
('AgileMed', 'Cidade do México', 'MX', 2800000.65, 5, 'Saúde'),
('FutureEng', 'Tóquio', 'JP', 1100000.50, 3, 'Engenharia'),
('TechHealth', 'Sydney', 'AU', 500000.25, 2, 'Saúde'),
('EngiCore Solutions', 'Bangalore', 'IN', 1000000.60, 3, 'Engenharia'),
('TechMax', 'Berlim', 'DE', 800000.75, 2, 'Tecnologia'),
('EvoTech Solutions', 'Nova York', 'US', 1200000.40, 3, 'Tecnologia'),
('DigitalSolutions', 'Londres', 'UK', 650000.35, 2, 'Tecnologia'),
('EngiWave', 'Toronto', 'CA', 1400000.55, 4, 'Engenharia'),
('HealthTech', 'Xangai', 'CN', 950000.30, 2, 'Saúde'),
('TechVortex', 'Amsterdã', 'NL', 2200000.70, 4, 'Tecnologia'),
('EngiByte', 'Los Angeles', 'US', 1800000.65, 3, 'Engenharia'),
('FuturaSolutions', 'Sidney', 'AU', 400000.20, 1, 'Tecnologia'),
('MindMed', 'Bangcoc', 'TH', 1000000.40, 2, 'Saúde'),
('InnovaTech Solutions', 'Paris', 'FR', 3000000.75, 5, 'Tecnologia'),
('TechFlex', 'Miami', 'US', 700000.30, 2, 'Tecnologia'),
('AgileCore', 'São Petersburgo', 'RU', 2500000.60, 4, 'Engenharia'),
('InnoSys Solutions', 'Lisboa', 'PT', 600000.50, 2, 'Tecnologia');


-- FUNÇÕES DE AGREGAÇÃO; AGRUPAMENTO; JUNÇÃO

SELECT * FROM companhia WHERE pais = 'BR';

SELECT COUNT(*) AS total_companhia FROM companhia; -- COUNT() -> CONTA AS LINHAS;

SELECT ROUND(AVG(lucro)) AS media_lucro FROM companhia;  -- AVG() -> SOMA TODOS OS VALORES DA COLUNA ESPECIFICADA E DIVIDE PELA QNTD DE RESGISTROS;

SELECT SUM(lucro) AS total_lucro FROM companhia; -- SUM() -> SOMA TODOS OS VALORES DA COLUNA ESPECIFICADA;

SELECT MAX(lucro) AS maior_lucro FROM companhia; -- MAX() -> TRAZ O MAIOR VALOR DA COLUNA ESPECIFICADA;

SELECT MIN(lucro) AS menor_lucro FROM companhia; -- MIN() -> TRAZ O MENOR VALOR DA COLUNA ESPECIFICADA;

SELECT COUNT(*) AS empresas_tecnologia FROM companhia WHERE ramo = "Tecnologia"; -- CONTA AS COMPANHIAS COM RAMO DE TECNOLOGIA;

SELECT COUNT(*) AS empresas_saude FROM companhia WHERE ramo = "Saúde"; -- CONTA AS COMPANHIAS COM RAMO DE SAUDE;

SELECT COUNT(*) AS empresas_eng FROM companhia WHERE ramo = "Engenharia"; -- CONTA AS COMPANHIAS COM RAMO DE ENGENHARIA;


-- AGRUPAMENTO

SELECT pais, COUNT(*) AS total_empresas 
FROM companhia 
GROUP BY pais  -- GROUP BY -> SEPARA POR GRUPO LEVANDO EM CONSIDERAÇÃO A COLUNA QUE É PASSADA APÓS O "BY"
ORDER BY total_empresas DESC;

-- Q1: MOSTRE OS RAMOS E O TOTAL DE EMPRESAS EM CADA RAMO.
SELECT ramo, COUNT(*) AS total_companhias
FROM companhia GROUP BY ramo;

-- Q2: MOSTRE OS PAÍSES E O LUCRO TOTAL EM CADA PAÍS (ORDENE PELO LUCRO TOTAL)
SELECT pais, SUM(lucro) AS lucro_total, AVG(lucro) AS lucro_medio 
FROM companhia 
GROUP BY pais 
ORDER BY lucro_total DESC;

-- Q3: MOSTRE OS RAMOS, PAISES E O TOTAL:
SELECT pais, ramo, COUNT(*) AS total
FROM companhia
GROUP BY pais, ramo -- MONTAR GRUPOS A PARTIR DE MULTIPLAS COLUNAS
ORDER BY pais;

-- Q4: SOMA DAS FILIAIS DE CADA RAMO, CONSIDERANDO AS COMPANHIAS COM MAIS DE 3 FILIAIS
SELECT ramo, SUM(filiais) AS total_filiais FROM companhia WHERE filiais >= 3 GROUP BY ramo;

-- Q5: SOMA DAS FILIAIS DE CADA RAMO, DO ESTADOS UNIDOS
SELECT ramo, SUM(filiais) AS total_filiais FROM companhia WHERE pais = 'US' GROUP BY ramo;

-- Q6: MOSTRE OS PAISES E OS LUCROS DE CADA PAIS QUE TEM LUCRO MAIOR QUE 1.500.000
-- FILTRAR GRUPOS
SELECT pais, SUM(lucro) AS lucro_pais 
FROM companhia 
GROUP BY pais 
HAVING lucro_pais > 1500000.00 -- HAVING -> USADO PARA FAZER O FILTRO COM GRUPOS(COLUNAS QUE NÃO ESTÃO NA TABELA PRINCIPAL), ENTRA NO LUGAR DO WHERE;
ORDER BY lucro_pais DESC;

-- Q7: RAMOS DAS COMPANHIAS COM MAIS DE 50 FILIAIS
SELECT ramo, SUM(filiais) AS total_filiais
FROM companhia
GROUP BY ramo
HAVING total_filiais > 50;
