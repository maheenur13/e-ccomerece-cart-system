import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalItems: 0,
    subTotal: 0,
    shippingCharge: 0,
    grandTotal: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }


        },
        removeFromCart(state, action) {
            const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartItems = updatedCart;
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const updatedCart = state.cartItems.filter(item => item.id !== action.payload.id)
                state.cartItems = updatedCart;
            }
        },

        clearCart(state) {
            state.cartItems = [];
        },
        getTotal(state) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })

            state.totalItems = quantity;
            state.subTotal = total.toFixed(2);
            state.shippingCharge = 100;
            state.grandTotal = (state.shippingCharge + total).toFixed(2);
        }
    },

});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;

export const getCartState = (state) => state.cart;