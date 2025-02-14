import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity += 1;
            } else {
                state.cart.push({...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;