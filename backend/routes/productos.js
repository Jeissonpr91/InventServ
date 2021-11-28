const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const productoController = require("../controllers/productoController");
const auth = require("../middleware/auth");

// Crear productos - api/productos
router.post(
  "/",
  auth,
  [check("nombre", "Debes escribir un nombre...").not().isEmpty()],
  productoController.crearProducto
);

// Obtener productos - api/productos
router.get("/", auth, productoController.obtenerProductos);

// Actualizar producto via id - api/productos
router.put(
  "/:id",
  auth,
  [check("nombre", "Debes escribir un nombre...").not().isEmpty()],
  productoController.actualizarProducto
);

// Eliminar producto via id - api/producto
router.delete("/:id", auth, productoController.eliminarProducto);

module.exports = router;
