import React, { Fragment } from 'react';
import Item from '../Item/Item';
import { Box } from '@material-ui/core';
import simpleBurger from '../../assets/hamburguesas.jpg';
import doubleBurguer from '../../assets/burguer_double.jpg';
import potatos from '../../assets/potatos.jpg';
import onions from '../../assets/onions.jpg';
import water from '../../assets/water.jpg';
import sodas from '../../assets/refrescos.jpg';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT } from '../../reducers/types';

export const Menu = () => {
  const action = (title, price) => {
    dispatch({ type: ADD_PRODUCT, payload: { title: title, price: price } });
  };

  const dispatch = useDispatch();
  const products = [
    {
      name: 'Hamburguesa simple',
      src: simpleBurger,
      price: 5,
      description: 'Deliciosa hamburguesa sencilla',
      secondaryText: ''
    },
    {
      name: 'Hamburguesa doble',
      src: doubleBurguer,
      price: 7,
      description: 'Delicioso hamburguesa doble',
      secondaryText: ''
    },
    {
      name: 'Papas fritas',
      src: potatos,
      price: 10,
      description: 'Crujientes papas fritas',
      secondaryText: ''
    },
    {
      name: 'Aros de cebolla',
      src: onions,
      price: 7,
      description: 'Ricos aros de cebolla',
      secondaryText: ''
    },
    {
      name: 'Agua',
      src: water,
      price: 7,
      description: 'Fresca',
      secondaryText: 'Horchata, jamaica, pepino'
    },
    {
      name: 'Gaseosa',
      src: sodas,
      price: 7,
      description: 'Pepsi',
      secondaryText: 'Pepsi, Fanta, Sprite'
    }
  ];

  return (
    <Fragment>
      <Box m={3}>
        {products.map(option => (
          <Item
            src={option.src}
            title={option.name}
            description={option.description}
            secondaryText={option.secondaryText}
            action={e => action(option.name, option.price)}
            actionText="Añadir al carrito"
            price={option.price}
          />
        ))}
      </Box>
    </Fragment>
  );
};
