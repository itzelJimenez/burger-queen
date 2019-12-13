import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LoginForm } from './components/Login/Login';
import { BreakfastMenu } from './components/BreakefastMenu/BreakfastMenu';
import { Home } from './routing/Home/Home';
import { Menu } from './components/Menu/Menu';
import { Layout } from './routing/Layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Layout path="/menu" component={Menu} title="Menú" />
        <Layout path="/breakfast" component={BreakfastMenu} title="Desayuno" />
        <Home path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
