import React, { Component } from "react";

import App from "./App";
import Login from "./Login.js"
import ExecMenu from "./components/menu/ExecMenu";

import { BrowserRouter, Route,Redirect } from "react-router-dom";


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect name="carlos" to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}


class Router extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authed: false,
      access_token: null
    };

    this.setAuth = this.setAuth.bind(this)
  }

  setAuth(token){
    this.setState({authed:true})
    this.setState({access_token:token})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="height_full">
          <Route exact={true} setAuth={this.setAuth} path="/main" render={() => <App />} />
          <Route exact={true} setAuth={this.setAuth} path="/login" render={() => <Login />} />
          <PrivateRoute authed={this.state.authed} setAuth={this.setAuth} path='/main' component={App} />
          <Route exact={true} path="/menu" render={() => <ExecMenu />} />
        </div>
      </BrowserRouter>
    );
  }
}


export default Router;
