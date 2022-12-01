import * as actionTypes from './actionTypes';

export const loadProduct = () => ({ type: actionTypes.LOAD_PRODUCT_DETAILS });

export const loadProductSuccess = data => ({ type: actionTypes.LOAD_PRODUCT_DETAILS_SUCCESS, data });

export const loadProductFail = () => ({ type: actionTypes.LOAD_PRODUCT_DETAILS_FAIL });
