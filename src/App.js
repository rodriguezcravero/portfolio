import React from "react";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Contacto from "./componentes/Contacto";
import About from "./componentes/About";
import Proyectos from "./componentes/Proyectos";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="container contenedor">
            <Switch>
              <Route exact path="/portfolio" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/proyectos" component={Proyectos} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
