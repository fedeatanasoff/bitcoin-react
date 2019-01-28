import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/header/Header";
import List from "./components/List/List";
import NotFound from "./components/notFound/NotFound";
import Detail from "./components/Detail/Detail";
import Footer from "./components/common/footer/Footer";

import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" component={List} exact />
            <Route path="/currency/:id" component={Detail} exact />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          {/* <div className="container">
  <List />
</div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
