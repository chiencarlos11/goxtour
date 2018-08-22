import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { PageHeader, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// const Home = () => (
//   <div>
//   </div>
// );

const Store = () => (
  <div>
     <ul>
      <li>Store 2330</li>
      <li>Store 2330</li>
      <li>Store 2330</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const Executive = () => (
  <div>
    <ul>
      <li>DAVID INGRAM</li>
      <li>JASON MULLIMS</li>
      <li>STEVEN POOLE</li>
      <li>JASON APPEL</li>
      <li>SHANE PENNELL</li>
    </ul>
  </div>
);

const Info = () => (
  <div>
    <ul>
      <li>Info</li>
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <ul>
      <li>Contact</li>
    </ul>
  </div>
);

// const Courses = ({ match }) => (
//   <div>
//      <ul>
//         <li><Link to={`${match.url}/technology`}>Technology</Link></li>
//         <li><Link to={`${match.url}/business`}>Business</Link></li>
//         <li><Link to={`${match.url}/economics`}>Economics</Link></li>
//     </ul>

//     <Route exact path={`${match.path}/:course`} render={({match}) => (<div> This is {match.params.course} </div>)}/>
//   </div>
// );

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/cities">CITIES</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/stores">STORES</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/executives">EXECUTIVES</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/info">INFO</Link>
              </Navbar.Brand>
              <Navbar.Brand>
                <Link to="/contact">CONTACT</Link>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </PageHeader>

        <Route path="/cities" component={City}/>
        <Route path="/stores" component={Store}/>
        <Route path="/executives" component={Executive}/>
        <Route path="/info" component={Info}/>
        <Route path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default App;