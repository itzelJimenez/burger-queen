import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar/Navbar';

export const Layout = ({ component: Component, ...rest }) => {
  return (
    <Fragment>
      <NavbarComponent />
    </Fragment>
  );
};
