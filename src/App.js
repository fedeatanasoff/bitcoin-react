import React, { Component } from "react";
import Header from "./components/common/header/Header";
// import "./index.css";
import List from "./components/List/List";

class App extends Component {
  render() {
    const title = "React Coin";
    return (
      <div>
        <Header />
        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
