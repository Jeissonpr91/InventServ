import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Registro from "./components/auth/Registro";
import Productos from "./components/productos/Productos";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AlertaState from "./context/alertas/AlertaState";
import AuthState from "./context/autenticacion/AuthState";
import ProductoState from "./context/productos/ProductoState";
import tokenAuth from "./config/token";
import RutaPrivada from "./components/rutas/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProductoState>
      <AlertaState>
        <AuthState>
          <Router>
            <Navbar></Navbar>
            <Switch>
            <Route exact path="/" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <RutaPrivada exact path="/productos" component={Productos} />
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthState>
      </AlertaState>
    </ProductoState>
  );
}

export default App;
