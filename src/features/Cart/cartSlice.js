import { cardActionAreaClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storege-keys';

const inititalCart = JSON.parse(localStorage.getItem(StorageKeys.CART)) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: inititalCart,
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;
        },

        hideMiniCart(state) {
            state.showMiniCart = true;
        },

        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === newItem.id);

            if (index >= 0) {
                // increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            } else {
                // add to cart
                state.cartItems.push(newItem);
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        setQuantity(state, action) {
            const { id, quantity } = action.payload;
            // check if product is avaiable in cart
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity += quantity;
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        increaseQuantity(state, action) {
            const id = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity += 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const index = state.cartItems.findIndex((x) => x.id === id);
            if (index >= 0) {
                state.cartItems[index].quantity -= 1;
                if (state.cartItems[index].quantity === 0) {
                    state.cartItems = state.cartItems.filter((x) => x.id !== id);
                }
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            const idNeedRemove = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);

            localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cartItems));
        },
    },
});

const { actions, reducer } = cartSlice;
export const {
    showMiniCart,
    hideMiniCart,
    addToCart,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} = actions;
export default reducer;
