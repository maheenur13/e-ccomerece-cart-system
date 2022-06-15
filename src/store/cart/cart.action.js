/* eslint-disable no-empty */
import store from '../store';
import { addToCart, clearCart, decreaseCart, getTotal, removeFromCart } from './cart.slice';

export const addDataToCart = (data) => {
    store.dispatch(addToCart(data))
};

export const removeItemFromCart = (data) => {
    store.dispatch(removeFromCart(data));
}
export const decreaseItemFromCart = (data) => {
    store.dispatch(decreaseCart(data));
}
export const clearShoppingCart = () => {
    store.dispatch(clearCart());
}
export const getCartTotalValues = () => {
    store.dispatch(getTotal());
}