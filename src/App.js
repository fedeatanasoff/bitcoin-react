import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/header/Header";
import List from "./components/List/List";
import NotFound from "./components/notFound/NotFound";

class App extends Component {
  render() {
    const title = "React Coin";
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={List} exact />
            <Route component={NotFound} />
          </Switch>

          {/* <div className="container">
  <List />
</div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
