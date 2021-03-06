const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  cantidad: {
    type: Number,
    default: 0,
  },
  precio: {
    type: Number,
    default: 0,
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  creado: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Producto", ProductoSchema);


