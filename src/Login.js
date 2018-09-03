import React from "react";
import App from "./App";
import InstagramLogin from "react-instagram-login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from "./static/goXtour_logo.png";
import "./stylesheets/login.css";

const fakeAuth = {
  isAuthenticated: false,
  access_token: "",
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

class LoginGo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };

    this.responseInstagramSuccess = this.responseInstagramSuccess.bind(this);
    this.responseInstagramError = this.responseInstagramError.bind(this);
  }

  responseInstagramSuccess(response) {
    console.log("login successful!");
    // this.props.route.setAuth(response.access_token);

    this.setState({ redirectToReferrer: true});
    fakeAuth.isAuthenticated = true;
    fakeAuth.access_token = response;
  }

  responseInstagramError(response) {
    console.log(response);
  }

  render() {


    if (this.state.redirectToReferrer === true) {

      return <Redirect to={{pathname: '/main'}} />;
    }

    return (
      <div className="login_container">
        <div className="login_box1">
          <img className="elementToAnimate" src={logo} alt="" />
        </div>

        <div className="login_box2">
          <InstagramLogin
            clientId="0b8287220c3e4760b11ade7ab9f25f9b"
            onSuccess={this.responseInstagramSuccess}
            onFailure={this.responseInstagramError}
            implicitAuth={true}
          >
            <span> Login with Instagram</span>
          </InstagramLogin>
        </div>
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const AppContainer = () => (
  <div className="height_full">
    <div className="App height_full">
      <App access_token={fakeAuth.access_token}/>
    </div>
  </div>
);

export default function Login() {
  return (
    <Router>
      <div className="height_full">
        <Route exact={true} path="/login" component={LoginGo} />
        <PrivateRoute path="/main" component={AppContainer} />
      </div>
    </Router>
  );
}
