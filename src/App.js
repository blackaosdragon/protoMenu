import React, { Component } from 'react';

import './App.css';
import Propiedades from "./components/propiedades.js";
import CalcIva from "./components/calciva.js";
import AppBar from "./components/materialUi/appBar"
import Barra from "./components/materialUi/appBarMenu"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Barra />

        {/* <Propiedades /> */}
        {/* <CalcIva name = "Calc1" iva = "15" /> */}

      </div>
    );
  }
}

export default App;
