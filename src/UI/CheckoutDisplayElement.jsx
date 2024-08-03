import "./ui.scss";

import { useDispatch, useSelector } from "react-redux";
import { toggleAction } from '../Controller/toggleSlice';

const CheckoutDisplayElement = () => {
    const dispatch = useDispatch();
    const shoppingCartItems = useSelector((state) => state.shoppingCart);

    const handleToggleCheckout = () => {
        dispatch(toggleAction("checkoutScreen"));
        dispatch(toggleAction("cartItems"));
    };

    return(
        <div className="checkoutdisplay">
            <h1>Checkout</h1>
            <div className="checkoutdisplay__list">
                {Object.keys(shoppingCartItems[0].cartItems).map((key) => (
                    <div key={key} className="checkoutdisplay__list__item">
                        <div className="checkoutdisplay__list__image">
                            <img src={shoppingCartItems[0].cartItems[key].productItem.image} alt={shoppingCartItems[0].cartItems[key].productItem.name} />
                        </div>
                        <div>
                            <span>{shoppingCartItems[0].cartItems[key].quantity}</span> 
                        </div>
                        <div> {shoppingCartItems[0].cartItems[key].productItem.name} </div>
                        <div> Total: ${shoppingCartItems[0].cartItems[key].productItem.cost * shoppingCartItems[0].cartItems[key].quantity} </div>
                    </div>
                ))}
            </div>
            <button onClick={() => handleToggleCheckout()}>
                Continue Shopping
            </button>
            <button>
                Pay Now (Coming Soon)
            </button>
        </div>
    )
}

export default CheckoutDisplayElement;