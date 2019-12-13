import { ADD_PRODUCT, REMOVE_PRODUCT, PURGE } from './types';

const INITIAL_STATE = {
  products: []
};

//TODO: Statemachine
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let articles = INITIAL_STATE.products;
      articles.push(action.payload);
      INITIAL_STATE.products = articles;
      return INITIAL_STATE;
    case REMOVE_PRODUCT:
      INITIAL_STATE.token = action.payload;
      return INITIAL_STATE;
    case PURGE:
      return (state = {});
    default:
      return state;
  }
};
