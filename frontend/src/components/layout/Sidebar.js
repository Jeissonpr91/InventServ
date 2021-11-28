import React from "react";
import CrearProducto from "../productos/CrearProducto";
import Barra from "./Barra";

const Sidebar = () => {
  return (
    <aside>
      <br />
      <br />
      <br />
      <Barra></Barra>

      <CrearProducto></CrearProducto>

      <div className="listado-productos">
        <hr />
      </div>
    </aside>
  );
};

export default Sidebar;
