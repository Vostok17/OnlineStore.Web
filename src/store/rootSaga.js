import { all } from 'redux-saga/effects';
import shoppingCart from '../features/shopping-cart-page/saga';

export default function* rootSaga() {
  yield all([shoppingCart()]);
}
