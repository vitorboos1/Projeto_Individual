var express = require("express");
var router = express.Router();

var pokemonUsuarioController = require("../controllers/pokemonUsuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    pokemonUsuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    pokemonUsuarioController.autenticar(req, res);
});

module.exports = router;