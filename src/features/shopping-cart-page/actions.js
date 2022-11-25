import actionTypes from './actionTypes';

export const addToShoppingCart = product => ({ type: actionTypes.ADD_TO_SHOPPING_CART, payload: product });

export const removeFromShoppingCart = product => ({ type: actionTypes.REMOVE_FROM_SHOPPING_CART, payload: product });
