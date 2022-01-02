import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import History from "./Pages/History";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/history"} component={History} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
