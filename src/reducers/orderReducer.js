import { ADD_PRODUCT, REMOVE_PRODUCT, PURGE } from './types';

const PRODUCTS = [];

//TODO: Statemachine
export default (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      PRODUCTS.push(action.payload);
      return PRODUCTS;
    case REMOVE_PRODUCT:
      PRODUCTS.pop();
      return PRODUCTS;
    case PURGE:
      return (state = {});
    default:
      return state;
  }
};
