import "./ui.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../Controller/cartSlice';

const BodyElement = () => {
    const dispatch = useDispatch();
    const shoppingCartItems = useSelector((state) => state.shoppingCart);
    console.log("Cart (body): "+shoppingCartItems[0].cartItems);

    const handleShoppingCartAdd = () => {
        dispatch(addToCart(0));
    };

    const handleShoppingCartDelete = () => {
        dispatch(removeFromCart(0));
    };
    
    return(
        <section className="pagebody">
            <article className="pagebody__article">
                <h1>Body</h1>
                <div><button onClick={() => handleShoppingCartAdd()}> + </button></div>
                <div><button onClick={() => handleShoppingCartDelete()}> - </button></div>
            </article>
        </section>
    )
}

export default BodyElement;