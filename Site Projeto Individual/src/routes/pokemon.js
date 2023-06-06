var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");

//Recebendo os dados do html e direcionando para a função cadastrar de pokemonController.js
router.post("/cadastrar", function (req, res) {
    pokemonController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    pokemonController.autenticar(req, res);
});

module.exports = router;