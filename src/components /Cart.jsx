import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux /cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    return ( <
            div className = "p-4 bg-gray-100 min-h-screen" >
            <
            h1 className = "text-2xl font-bold" > Shopping Cart < /h1> {
            cart.length === 0 ? ( <
                p > Your cart is empty. < /p>
            ) : (
                cart.map((item) => ( <
                    div key = { item.id }
                    className = "border p-4 rounded-lg shadow-md bg-white my-2" >
                    <
                    h2 className = "text-xl font-bold" > { item.name } < /h2> <
                    p className = "text-gray-600" > $ { item.price }
                    x { item.quantity } < /p> <
                    div className = "flex gap-2 mt-2" >
                    <
                    input type = "number"
                    min = "1"
                    value = { item.quantity }
                    className = "border p-1 w-16 text-center"
                    onChange = {
                        (e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                    }
                    /> <
                    button className = "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick = {
                        () => dispatch(removeFromCart(item.id))
                    } >
                    Remove <
                    /button> < /
                    div > <
                    /div>
                ))
            )
        } <
        /div>
);
};

export default Cart;