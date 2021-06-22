create table Usuarios(
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

drop table moradores ;

show tables ;

describe moradores;
select * from moradores ;

insert into moradores (nome,email,unidade,senha ) values ("karina","teste@gmail.com","24", "12343") ;