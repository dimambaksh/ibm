import "./ui.scss";

import ProductItemElement from "./ProductItemElement";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity, deleteProductQuantity } from '../Controller/productSlice';
import { toggleAction } from '../Controller/toggleSlice';

const CartDisplayElement = () => {
    const dispatch = useDispatch();
    const shoppingCartItems = useSelector((state) => state.shoppingCart);

    const handleToggleCheckout = () => {
        dispatch(toggleAction("checkoutScreen"));
    };

    //disable checkout if shopping cart is empty, adjust buttons for +, - and delete to show better
    //adjust navbar layout for mobile screen

    return(
        <div className="productdisplay">
            <h1>Shopping Cart</h1>
            <div className="productdisplay__list">
                <div className="productdisplay__list__products">
                    {Object.keys(shoppingCartItems[0].cartItems).map((key) => (
                        <ProductItemElement item={shoppingCartItems[0].cartItems[key]} cart={true}/>
                    ))}
                </div>
            </div>
            <div className="productdisplay__checkout">
                {shoppingCartItems[0].cartTotal > 0 ?
                    <button onClick={() => handleToggleCheckout()}>checkout <span className="productdisplay__checkout__total">($ {shoppingCartItems[0].cartTotal.toFixed(2)})</span></button>
                    :
                    <button onClick={() => handleToggleCheckout()} disabled>checkout <span className="productdisplay__checkout__total">($ {shoppingCartItems[0].cartTotal.toFixed(2)})</span></button>
                }
            </div>
        </div>
    )
}

export default CartDisplayElement;