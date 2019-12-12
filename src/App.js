import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from './routing/Layout/Layout';
import { LoginForm } from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Layout component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
