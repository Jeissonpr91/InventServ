import React, { useReducer } from "react";
import productoContext from "./productoContext";
import productoReducer from "./productoReducer";
//import { v4 as uuidv4 } from 'uuid';
import {
  FORMULARIO_PRODUCTO,
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  VALIDAR_FORMULARIO,
  PRODUCTO_ACTUAL,
  ELIMINAR_PRODUCTO,
  PRODUCTO_ERROR,
  ACTUALIZAR_PRODUCTO
} from "../../types";

import clienteAxios from "../../config/axios";

const ProductoState = (props) => {
  const initialState = {
    productos: [],
    formulario: false,
    errorFormulario: false,
    producto: null,
    mensaje: null,
    
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(productoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PRODUCTO,
    });
  };

  // Obtener los productos
  const obtenerProductos = async () => {
    try {
      const resultado = await clienteAxios.get("/api/productos");
      //console.log(resultado.data.productos);

      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: resultado.data.productos,
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error...',
        categoria: 'alert-danger'
      };

      dispatch({
        type: PRODUCTO_ERROR,
        payload: alerta,
      });
    }
  };

  // Editar o actualizar producto
  const actualizarProducto = async (producto) => {
    try {
      const resultado = await clienteAxios.put(`/api/productos/${producto._id}`, producto);
      console.log(resultado);
      
      dispatch({
        type: ACTUALIZAR_PRODUCTO,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Extrae una tarea para editarla
  const guardarProductoActual = (producto) => {
    dispatch({
      type: PRODUCTO_ACTUAL,
      payload: producto,
    });
  };


  // Agregar nuevo producto
  const agregarProducto = async (producto) => {
    try {
      const resultado = await clienteAxios.post("/api/productos", producto);
      // Insertar el producto en el state
      dispatch({
        type: AGREGAR_PRODUCTO,
        payload: resultado.data,
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error...',
        categoria: 'alert-danger'
      };

      dispatch({
        type: PRODUCTO_ERROR,
        payload: alerta,
      });
    }
  };

  // Validar Formulario de productos
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Seleccionar producto con click
  const productoActual = (productoid) => {
    //console.log(productoid);
    
    dispatch({
      type: PRODUCTO_ACTUAL,
      payload: productoid,
    });
  };

  // Elimina un producto
  const eliminarProducto = async (productoid) => {
    try {
      await clienteAxios.delete(`/api/productos/${productoid}`);
      dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: productoid,
      });
    } catch (error) {
      const alerta = {
        msg: 'Hubo un error...',
        categoria: 'alert-danger'
      };

      dispatch({
        type: PRODUCTO_ERROR,
        payload: alerta,
      });
    }
  };

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        producto: state.producto,
        mensaje: state.mensaje,
        mostrarFormulario,
        obtenerProductos,
        agregarProducto,
        mostrarError,
        actualizarProducto,
        guardarProductoActual,
        productoActual,
        eliminarProducto,
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
