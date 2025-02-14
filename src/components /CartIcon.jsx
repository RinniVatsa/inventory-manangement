import { useSelector } from "react-redux";

const CartIcon = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return ( <
        div className = "fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg" > 🛒Cart({ totalCount }) <
        /div>
    );
};

export default CartIcon;