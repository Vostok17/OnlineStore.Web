import actionTypes from './actionTypes';

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SHOPPING_CART:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default shoppingCartReducer;
