import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux /cartSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return ( <
        div className = "p-4" >
        <
        h2 className = "text-2xl font-bold mb-4" > Shopping Cart < /h2>

        {
            cartItems.length === 0 ? ( <
                p className = "text-gray-500" > Your cart is empty. < /p>
            ) : ( <
                div className = "space-y-4" > {
                    cartItems.map((item) => ( <
                        div key = { item.id }
                        className = "flex items-center justify-between border p-4 rounded-lg bg-white shadow-md" >
                        <
                        img src = { item.image }
                        alt = { item.name }
                        className = "w-16 h-16 object-cover rounded-md" / >
                        <
                        div >
                        <
                        h3 className = "text-lg font-semibold" > { item.name } < /h3> <
                        p className = "text-gray-600" > $ { item.price } < /p> <
                        p className = "text-sm text-gray-500" > Stock: { item.stock } < /p> <
                        div className = "flex items-center mt-2" >
                        <
                        button className = "bg-gray-300 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-400"
                        onClick = {
                            () => dispatch(decreaseQuantity(item.id))
                        } >
                        -
                        <
                        /button> <
                        span className = "px-4" > { item.quantity } < /span> <
                        button className = "bg-gray-300 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-400"
                        onClick = {
                            () => dispatch(increaseQuantity(item.id))
                        } >
                        +
                        <
                        /button> < /
                        div > <
                        /div> <
                        button className = "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick = {
                            () => dispatch(removeFromCart(item.id))
                        } >
                        Remove <
                        /button> < /
                        div >
                    ))
                } <
                /div>
            )
        } <
        /div>
    );
};

export default Cart;