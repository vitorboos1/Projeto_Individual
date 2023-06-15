var express = require("express");
var router = express.Router();

var telefoneController = require("../controllers/telefoneController");

//Recebendo os dados do html e direcionando para a função cadastrar de pokemonController.js
router.post("/cadastrar", function (req, res) {
    telefoneController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    telefoneController.autenticar(req, res);
});

module.exports = router;