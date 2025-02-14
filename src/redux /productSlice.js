import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: "Laptop", price: 1200, stock: 5, image: require("../images/laptoppppp_cleanup_1718705991705_1718706003867.avif") },
        { id: 2, name: "Phone", price: 800, stock: 10, image: require("../images/phone.webp") },
        { id: 3, name: "Headphones", price: 150, stock: 15, image: require("../images/headphone.webp") },
    ],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productSlice.reducer;