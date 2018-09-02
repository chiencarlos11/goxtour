import React, { Component } from "react";

import App from "./App";
import Login from "./Login.js"
import ExecMenu from "./components/menu/ExecMenu";

import { BrowserRouter, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="height_full">
          <Route
            exact={true}
            path="/"
            render={() => (
              <div className="App height_full">
                <Login />
              </div>
            )}
          />
          <Route exact={true} path="/menu" render={() => <ExecMenu />} />
        </div>
      </BrowserRouter>
    );
  }
}


export default Router;
