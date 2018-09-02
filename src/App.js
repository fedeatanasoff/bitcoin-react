import React, { Component } from "react";
import Header from "./components//common/Header";
import List from "./components/list/List";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
