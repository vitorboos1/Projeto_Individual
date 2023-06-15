var express = require("express");
var router = express.Router();

var pokemonUsuarioController = require("../controllers/pokemonUsuarioController");
var telefoneController = require("../controllers/telefoneController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    pokemonUsuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    pokemonUsuarioController.autenticar(req, res);
});

router.get("/ultimas/:idPokemon", function (req, res) {
    pokemonUsuarioController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idPokemon", function (req, res) {
    pokemonUsuarioController.buscarMedidasEmTempoReal(req, res);
})

router.post("/telefone", function (req, res) {
    telefoneController.cadastrar(req, res);
})

module.exports = router;