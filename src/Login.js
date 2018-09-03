import React, { Component } from "react";
import InstagramLogin from "react-instagram-login";
import App from "./App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { instagram } from '@fortawesome/free-solid-svg-icons'
import logo from "./static/goXtour_logo.png";
import { Redirect } from "react-router-dom";


const responseInstagramError = response => {
  console.log(response);
};

class Login extends Component {


  responseInstagramSuccess(response){
    console.log(response);
    // this.props.route.setAuth(response.access_token);
    console.log(this.props.location.state.name)
  }

  render() {
    return (
      <InstagramLogin
        clientId="0b8287220c3e4760b11ade7ab9f25f9b"
        onSuccess={this.responseInstagramSuccess}
        onFailure={responseInstagramError}
        implicitAuth={true}
      >
        <img className="image-top" src={logo} alt=""/>
        <span> Login with Instagram</span>
      </InstagramLogin>
    );
  }
}

export default Login;
