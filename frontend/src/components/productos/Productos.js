import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import ListadoProductos from "./ListadoProductos";
import AuthContext from "../../context/autenticacion/authContext";

const Productos = () => {
  // Extraer los valores de AuthContext.js
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container col-md-8 ">
      <div className="row main">
        <div className="col-md-4">
          <Sidebar className="col sidebar"></Sidebar>
        </div>

        <div className="col-md-8">
          <br />
          <br />
          <br />

          <ListadoProductos></ListadoProductos>
        </div>
      </div>
    </div>
  );
};

export default Productos;
