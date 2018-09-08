import React, { Component } from "react";
import Header from "./components//common/Header";
import List from "./components/list/List";
import NotFound from "./components/notFound/NotFound";
import Detail from "./components/detail/Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={List} />
            <Route path="/currency/:id" exact component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
