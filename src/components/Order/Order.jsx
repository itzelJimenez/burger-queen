import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector, shallowEqual } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
}));

const Order = () => {
  const products = useSelector(
    state => state.orderReducer.products,
    shallowEqual
  );

  const getTotal = () => {
    products.reduce((a, b) => {
      return Number(a.price) + Number(b.price);
    });
  };

  const classes = useStyles();
  const total = 125;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs zeroMinWidth container spacing={1}>
          <Typography noWrap>Detalle de orden</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} container>
            Producto
          </Grid>
          <Grid item xs={6} container>
            Precio
          </Grid>
        </Grid>

        <Grid>
          {products.map(option => (
            <Grid container spacing={2}>
              <Grid item xs={6} container>
                {option.title}
              </Grid>
              <Grid item xs={6} container>
                ${option.price}.00
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} container>
            Total:
          </Grid>
          <Grid item xs={6} container>
            ${getTotal()}.00
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Order;
