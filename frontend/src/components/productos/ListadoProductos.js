import React, { useContext, useEffect, useState } from "react";
import Producto from "./Producto";
import productoContext from "../../context/productos/productoContext";

const ListadoProductos = () => {
  // Obtener el state de productos
  const productosContext = useContext(productoContext);

  // Extraer productos del State inicial
  const { productos, obtenerProductos } = productosContext;

  // Obtener productos cuando carga el componenete
  useEffect(() => {
    obtenerProductos();

    // eslint-disable-next-line
  }, []);

  // Validar si productos tiene contenido
  if (productos.length === 0) {
    return (
      <div>
        <br />
        <br />

        <h4>No hay Productos...</h4>
      </div>
    );
  }

  return (
    <div>
      <h2>Listado de Productos</h2>
      <br/>
      <br/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((i, j) => (
            <Producto key={i._id} producto={i} numero={(j += 1)}></Producto>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoProductos;
