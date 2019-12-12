import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Layout } from './routing/Layout/Layout';

//import Home from './pages/Home';
//import Admin from './pages/Admin';

function App() {
  /*<Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/admin">Admin Page</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={Admin} />
    </div>
    </Router>*/
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
