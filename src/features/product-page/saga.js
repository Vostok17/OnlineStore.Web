import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import ProductApi from './../../api/productApi';
import { loadProductFail, loadProductSuccess } from './actions';
import { LOAD_PRODUCT_DETAILS } from './actionTypes';

export function* watchProductDetails() {
  yield takeEvery(LOAD_PRODUCT_DETAILS, fetchProductDetails);
}

export function* fetchProductDetails(action) {
  try {
    const res = yield call(ProductApi.getProduct, action.id);
    yield put(loadProductSuccess(res.data));
  } catch (error) {
    yield put(loadProductFail());
  }
}

export default function* () {
  yield all([watchProductDetails()]);
}
