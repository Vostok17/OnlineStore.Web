import UserSessionService from '../../common/services/userSessionService';
import initialState from '../../store/initialState';
import * as actionTypes from './actionTypes';

const cart = UserSessionService.getShoppingCart();
const initStateWithCart = { ...initialState.cart, data: cart ? cart : [] };

const shoppingCartReducer = (state = initStateWithCart, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CART:
      return { ...state, isLoading: true };
    case actionTypes.LOAD_CART_SUCCESS:
      return { ...state, data: action.data, isLoading: false };
    case actionTypes.LOAD_CART_FAIL:
      return { ...state, isLoading: false, hasError: true };

    case actionTypes.ADD_TO_SHOPPING_CART:
      if (!state.data.find(p => p.id === action.product.id)) {
        state.data.push(action.product);
      }
      return state;
    case actionTypes.REMOVE_FROM_SHOPPING_CART:
      return { ...state, data: state.data.filter(p => p.id !== action.id) };
    case actionTypes.UPDATE_PRODUCT_QUANTITY:
      state.data.find(p => p.id === action.data.id).quantity = action.data.quantity;
      return state;
    default:
      return state;
  }
};

export default shoppingCartReducer;
