import { combineReducers } from '@reduxjs/toolkit';

import cart from './cart/cart.slice';
const rootReducer = combineReducers({
    cart
});
export default rootReducer;