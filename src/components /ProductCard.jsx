import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return ( <
        div className = "border p-4 rounded-md shadow-md" >
        <
        h2 className = "text-lg font-bold" > { product.name } < /h2> <
        p className = "text-gray-600" > $ { product.price } < /p> <
        button onClick = {
            () => dispatch(addToCart(product)) }
        className = "mt-2 bg-blue-500 text-white px-4 py-2 rounded" >
        Add to Cart <
        /button> <
        /div>
    );
};

export default ProductCard;