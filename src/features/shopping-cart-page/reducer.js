import initialState from '../../store/initialState';
import * as actionTypes from './actionTypes';

const shoppingCartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return { ...state, isLoading: true };
    case actionTypes.LOAD_CART_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case actionTypes.LOAD_CART_FAIL:
      return { ...state, isLoading: false, hasError: true };
    case actionTypes.ADD_TO_SHOPPING_CART:
      state.data.push(action.product);
      return state;
    case actionTypes.REMOVE_FROM_SHOPPING_CART:
      return { ...state, data: state.data.filter(p => p.id !== action.id) };
    default:
      return state;
  }
};

export default shoppingCartReducer;
