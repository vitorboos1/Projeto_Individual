create database PokeTech;
use PokeTech;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
estadoUsuario varchar(45));

create table pokemon (
idPokemon int primary key auto_increment,
nomePokemon varchar(45));

create table PokemonUsuario (
fkPokemon int,
fkUsuario int, 
qtdVotos int,
primary key (fkPokemon, fkUsuario),
foreign key (fkPokemon) references pokemon(idPokemon),
foreign key (fkUsuario) references usuario(idUsuario));
