import React, { Fragment } from 'react';
import Item from '../Item/Item';
import { Box } from '@material-ui/core';
import coffe1 from '../../assets/coffe1.jpeg';
import milk from '../../assets/milk-coffe.jpg';
import sandwich from '../../assets/sandwich.jpg';
import juice from '../../assets/juice.jpg';

export const BreakfastMenu = ({ component: Component, title }) => {
  const action = (title, price) => {
    console.log(title, price);
  };

  const products = [
    {
      name: 'Café Americano',
      src: coffe1,
      price: 5,
      description: 'Delicioso café americano',
      secondaryText: 'Elige entre los diferentes tipos de café que importamos'
    },
    {
      name: 'Café con leche',
      src: milk,
      price: 7,
      description: 'Delicioso café con leche',
      secondaryText: 'Contamos con todos los tipos de leche disponibles.'
    },
    {
      name: 'Sandwich de jamón y queso',
      src: sandwich,
      price: 10,
      description: 'Delicioso Sandwich de jamón y queso',
      secondaryText: 'Agrega tu infrediente favorito por $10 más.'
    },
    {
      name: 'Jugo natural',
      src: juice,
      price: 7,
      description: 'Hechos al momento',
      secondaryText: 'Zanahoria, Naranja, Betabel, Jitomate'
    }
  ];
  return (
    <Fragment>
      <Box m={2}>
        {products.map(option => (
          <Item
            src={option.src}
            title={option.name}
            description={option.description}
            secondaryText={option.secondaryText}
            action={e => action(option.title, option.price)}
            actionText="Añadir al carrito"
            price={option.price}
          />
        ))}
      </Box>
    </Fragment>
  );
};