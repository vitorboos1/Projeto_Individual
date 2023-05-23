create database Projeto_individual;
use Projeto_individual;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
estadoUsuario varchar(45));

create table pokemon (
idPokemon int primary key auto_increment,
nomePokemon varchar(45),
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario));

