create database Projeto_Individual_PokeTech;
use Projeto_Individual_PokeTech;

create table Pokemon(
idPokemon int primary key auto_increment,
nomePokemon varchar(45),
Posicao int,
fkEstado int);

create table EstadoBrasil (
idEstado int primary key,
nomeEstado varchar(45),
siglaEstado char(2),
QntVotos int);

alter table Pokemon add foreign key(fkEstado) references EstadoBrasil(idEstado);
