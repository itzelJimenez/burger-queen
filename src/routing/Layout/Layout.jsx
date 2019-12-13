import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Route } from 'react-router-dom';

export const Layout = ({ component: Component, title: Title, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => <Dashboard component={Component} title={Title} />}
    />
  );
};
