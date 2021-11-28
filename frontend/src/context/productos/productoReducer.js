import {
  FORMULARIO_PRODUCTO,
  OBTENER_PRODUCTOS,
  AGREGAR_PRODUCTO,
  VALIDAR_FORMULARIO,
  ACTUALIZAR_PRODUCTO,
  PRODUCTO_ACTUAL,
  ELIMINAR_PRODUCTO,
  PRODUCTO_ERROR,
} from "../../types";

const productoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PRODUCTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
        formulario: false,
        errorFormulario: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorFormulario: true,
      };
    case ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map((i) =>
          i._id === action.payload._id ? action.payload : i
        ),
      }; 

    case PRODUCTO_ACTUAL:
      return {
        ...state,
        producto: action.payload,
        formulario: true
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter((i) => i._id !== action.payload),
        producto: null,
      };
    case PRODUCTO_ERROR:
      return {
        ...state,
        mensaje: action.payload,
      };

    default:
      return state;
  }
};
export default productoReducer;
