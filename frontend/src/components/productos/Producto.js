import React, { useContext } from "react";
import productoContext from "../../context/productos/productoContext";

const Producto = ({ producto, numero }) => {
  // Extraer el State de producto
  const productosContext = useContext(productoContext);
  const { eliminarProducto, actualizarProducto, guardarProductoActual } = productosContext;

  // Eliminar Producto
  const onClickEliminarProducto = () => {
    eliminarProducto(producto._id);
  };

  // Actualizar Producto
  const seleccionarProducto = () => {
    guardarProductoActual(producto)
  }

  return (
    <tr>
      <th scope="row">{numero}</th>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td>
        <button className="btn btn-warning" id="editar" onClick={seleccionarProducto}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={onClickEliminarProducto}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
