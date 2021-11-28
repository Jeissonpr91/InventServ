const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");

router.post("/", authController.autenticarUsuario);

// 103 - Obtener el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

// 104 - Vamos a controllers/authController.js

module.exports = router;
