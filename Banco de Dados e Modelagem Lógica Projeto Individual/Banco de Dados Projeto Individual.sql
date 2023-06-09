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

insert into usuario values (null, 'Jorge', 'Amapa');
insert into usuario values (null, "Vitao", "SAO PAULO");

insert into pokemon values (null, "Rilaboom");
insert into pokemon values (null, "Scorbunny");
insert into pokemon values (null, "Charmander");

insert into PokemonUsuario values (1, 1, 1);
insert into PokemonUsuario values (2,1,1);
insert into PokemonUsuario values (2, 4, 1);


select count(qtdVotos), pokemon.nomePokemon from PokemonUsuario join pokemon on PokemonUsuario.fkPokemon = Pokemon.idPokemon group by idPokemon;