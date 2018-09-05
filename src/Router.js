import React, { Component } from "react";

import App from "./App";
import Gallery from "./components/photos/Gallery"
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
                <App />
              </div>
            )}
          />
          <Route exact={true} path="/menu" render={() => <ExecMenu />} />
          <Route exact={true} path="/gallery" render={() => <Gallery />} />
        </div>
      </BrowserRouter>
    );
  }
}


export default Router;
