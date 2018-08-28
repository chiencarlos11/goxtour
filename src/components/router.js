import React, { Component } from "react";

import App from "./App";

import { BrowserRouter, Route } from "react-router-dom";
import MapContainer from "./maps/MapContainer";

import Instagram from "./photos/Instagram";

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
          <Route
            exact={true}
            path="/map"
            render={() => (
              <div className="MapContainer height_full">
                <MapContainer />
              </div>
            )}
          />

          <Route
            exact={true}
            path="/Instagram"
            render={() => (
              <div className="Instagram height_full">
                <Instagram execId="1" storeId="S1" />
              </div>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
