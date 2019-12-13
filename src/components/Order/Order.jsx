import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import { useDispatch } from 'react-redux';
import { REMOVE_PRODUCT } from '../../reducers/types';

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
  const products = useSelector(state => state.orderReducer, []);
  const dispatch = useDispatch();

  const getTotal = () => {
    if (products.length > 0) {
      return products
        .map(item => item.price)
        .reduce((prev, next) => prev + next);
    }
    return 0;
  };

  const deleteItem = (e, el) => {
    let arr = products;
    arr.forEach((obj, idx) => {
      if (obj.id === el.id) {
        arr.splice(idx, 1);
      }
    });

    updateState(arr);
  };

  const updateState = payload => {
    dispatch({ type: REMOVE_PRODUCT, payload: payload });
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid item xs zeroMinWidth container spacing={1}>
          <Typography noWrap>Detalle de orden</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={1} />
          <Grid item xs={5} container>
            Producto
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={4} container>
            Precio
          </Grid>
        </Grid>

        {products && products.length > 0 ? (
          <Grid>
            {products.map(option => (
              <ListItem>
                <Grid xs={9} spacing={2}>
                  <ListItemText primary={`${option.title}`} />
                </Grid>
                <Grid item xs>
                  <ListItemText primary={`${option.price}.00`} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick={e => deleteItem(e, option)} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Grid>
              </ListItem>
            ))}
          </Grid>
        ) : null}
        <Divider light />
        <List>
          <ListItem>
            <Grid xs={6}></Grid>
            <Grid item xs>
              <ListItemText primary="Total" />
            </Grid>
            <Grid xs={1}></Grid>
            <ListItemText primary={`${getTotal()}.00`} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};
export default Order;
