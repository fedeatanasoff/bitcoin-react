import React, { Component } from "react";
import Header from "./components//common/Header";
import "./index.css";

class App extends Component {
  render() {
    const title = "React Coin";
    return (
      <div>
        <Header />
        <h1>{title}</h1>
        <p>datos financieros actualizados de las criptomonedas</p>
      </div>
    );
  }
}

export default App;
