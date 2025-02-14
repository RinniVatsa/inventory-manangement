import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux /cartSlice";

const ProductList = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    return ( <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-4 p-4" > {
            products.map((product) => ( <
                div key = { product.id }
                className = "border p-4 rounded-lg shadow-lg bg-white" >
                <
                img src = { product.image }
                alt = { product.name }
                className = "w-full h-40 object-cover rounded-md" / >
                <
                h2 className = "text-xl font-bold mt-2" > { product.name } < /h2> <
                p className = "text-gray-600" > $ { product.price } < /p> <
                p className = "text-sm text-gray-500" > Stock: { product.stock } < /p> <
                button className = "mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick = {
                    () => dispatch(addToCart(product))
                } >
                Add to Cart <
                /button> < /
                div >
            ))
        } <
        /div>
    );
};

export default ProductList;