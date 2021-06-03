create table moradores(
id INT unsigned primary KEY auto_increment, 
nome VARCHAR(100) NOT NULL ,
email  VARCHAR(100),
CONDOMINIO_id INT unsigned ,
UNIDADE VARCHAR(100),
foreign key (CONDOMINIO_id)  references CONDOMINIOS (id) 
);


create table CONDOMINIOS (
id INT unsigned primary KEY auto_increment, 
nome VARCHAR(100) NOT NULL ,
ENDERECO VARCHAR(100),
email  VARCHAR(100),
ADMIN_ID  INT unsigned ,
foreign key (ADMIN_ID)  references administradores (id) 
);


create table administradores  (
id INT unsigned primary KEY auto_increment, 
nome VARCHAR(100) NOT NULL ,
email  VARCHAR(100)
);


