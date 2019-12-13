import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginForm } from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BreakfastMenu } from './components/BreakefastMenu/BreakfastMenu';
import { Home } from './routing/Home/Home';
import { Menu } from './components/Menu/Menu';

function App() {
  let breakfastComponent = () => {
    return <Dashboard component={BreakfastMenu} title="Desayuno" />;
  };

  let menuComponent = () => {
    return <Dashboard component={Menu} title="Menú" />;
  };

  return (
    <Router>
      <Switch>
        <Route path="/breakfast" component={breakfastComponent} />
        <Route path="/menu" component={menuComponent} />
        <Route path="/dashboard" component={breakfastComponent} />
        <Home path="/" component={LoginForm} />
      </Switch>
    </Router>
  );
}

export default App;
