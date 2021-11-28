const Producto = require("../models/Producto");
const { validationResult } = require("express-validator");

exports.crearProducto = async (req, res) => {
  
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  try {
    
    const producto = new Producto(req.body);

    producto.creador = req.usuario.id;

    producto.save();
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find({ creador: req.usuario.id });
    res.json({ productos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};

exports.actualizarProducto = async (req, res) => {
  
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer info del producto
  const { nombre, cantidad, precio } = req.body;
  const nuevoProducto = {};

  if (nombre) {
    nuevoProducto.nombre = nombre;
  }
  if (cantidad) {
    nuevoProducto.cantidad = cantidad;
  }
  if (nombre) {
    nuevoProducto.precio = precio;
  }

  try {
    // Revisar el Id del producto
    let producto = await Producto.findById(req.params.id);

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ msg: " El producto no está registrado..." });
    }

    // Verificar creador del producto
    if (producto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: "No autorizado..." });
    }

    // Actualizar producto
    producto = await Producto.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProducto },
      { new: true }
    );

    res.json({ producto });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error...");
  }
};


exports.eliminarProducto = async (req, res) => {
  try {
    // Revisar el id
    let producto = await Producto.findById(req.params.id);

    // Verificar si el producto existe
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado..." });
    }

    // Verificar el creador del producto
    if (producto.creador.toString() !== req.usuario.id) {
      req.status(401).json({ msg: "No autorizado..." });
    }

    // Eliminar producto
    await Producto.findOneAndRemove({ _id: req.params.id });
    res.json({msg: 'Producto eliminado...'})

  } catch (error) {
    console.log(error);
    res.status(500).send("HUbo un error...");
  }
};

