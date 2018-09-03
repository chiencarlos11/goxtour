import React from "react";
import App from "./App";
import InstagramLogin from "react-instagram-login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import logo from "./static/goXtour_logo.png";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };

    this.responseInstagramSuccess = this.responseInstagramSuccess.bind(this)
    this.responseInstagramError = this.responseInstagramError.bind(this)
  }


  responseInstagramSuccess(response) {
    console.log("login successful!" + response);
    // this.props.route.setAuth(response.access_token);

    this.setState({ redirectToReferrer: true });
  }

  responseInstagramError(response) {
    console.log(response);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (this.state.redirectToReferrer === true) {
      console.log("redirectToReferrer == True");
      return <Redirect to={from} />;
    }

    return (
      <div>
        <InstagramLogin
          clientId="0b8287220c3e4760b11ade7ab9f25f9b"
          onSuccess={this.responseInstagramSuccess}
          onFailure={this.responseInstagramError}
          implicitAuth={true}
        >
          <img className="image-top" src={logo} alt="" />
          <span> Login with Instagram</span>
        </InstagramLogin>
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

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route exact={true} path="/public" component={Public} />
        <Route exact={true} path="/login" component={Login} />
        <PrivateRoute path="/main" component={App} />
      </div>
    </Router>
  );
}
