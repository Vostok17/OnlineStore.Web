import initialState from '../../store/initialState';
import actionTypes from './actionTypes';

const shoppingCartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_SHOPPING_CART:
      return state.concat(action.payload);
    case actionTypes.REMOVE_FROM_SHOPPING_CART:
      return state.filter(p => p.id !== action.payload);
    default:
      return state;
  }
};

export default shoppingCartReducer;
