const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("nombre", "Debes introducir tu nombre...").not().notEmpty(),
    check("email", "Agrega un email valido...").isEmail(),
    check(
      "password",
      "Tu password debe ser mínimo de 6 caracteres..."
    ).isLength({ min: 6 }),
  ],
  usuarioController.crearUsuario
);

module.exports = router;
