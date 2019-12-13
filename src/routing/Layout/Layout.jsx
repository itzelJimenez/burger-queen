import React, { Fragment } from 'react';
import NavbarComponent from '../../components/Navbar/Navbar';
import { Grid } from '@material-ui/core';

export const Layout = ({ component: Component, ...rest }) => {
  return (
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
  );
};
