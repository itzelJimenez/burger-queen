import React, { Fragment } from 'react';
import NavbarComponent from '../../components/Navbar/Navbar';
import { Grid } from '@material-ui/core';
import Dashboard from '../../components/Dashboard/Dashboard';

export const Layout = ({ component: Component, title }) => {
  return <Dashboard component={Component} title={title} />;
  /*return (
    <Fragment>
      <NavbarComponent />
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Component />
        </Grid>
      </Grid>
    </Fragment>
  );*/
};
