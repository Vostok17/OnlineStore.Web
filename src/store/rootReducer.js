import { combineReducers } from 'redux';
import shoppingCartReducer from '../features//shopping-cart-page/reducer';
import productCardsReducer from '../features/home-page/reducer';
import productDetailsReducer from '../features/product-page/reducer';

const rootReducer = combineReducers({
  productCards: productCardsReducer,
  productDetails: productDetailsReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
