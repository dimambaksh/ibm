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
            <div className="checkoutdisplay__list">
                <div className="checkoutdisplay__list__left">
                    <div className="checkoutdisplay__list__left-top">
                        <div className="topheader">Delivering to John Doe</div>
                        <div className="topcontent">1000 Somewhere over the rainbow, Way High, UP</div>
                        <button className="checkoutbutton" onClick={() => handleToggleCheckout()}>Continue Shopping</button>
                    </div>
                    <div className="checkoutdisplay__list__left-bottom">
                        <div className="bottomheader">Arriving Tomorrow</div>
                        <div className="bottomcontent">
                            {Object.keys(shoppingCartItems[0].cartItems).map((key) => (
                                <div key={key} className="checkoutdisplay__list__item">
                                    <div className="checkoutdisplay__list__image">
                                        <img src={shoppingCartItems[0].cartItems[key].productItem.image} alt={shoppingCartItems[0].cartItems[key].productItem.name} />
                                    </div>
                                    <div className="checkoutdisplay__list__summary">
                                        <div className="contentname">
                                            {shoppingCartItems[0].cartItems[key].productItem.name}
                                        </div>
                                        <div className="contentdescription">
                                            {shoppingCartItems[0].cartItems[key].productItem.description}
                                        </div>
                                        <div className="contentheader">
                                            <div>Quantity:</div>
                                            <div>{shoppingCartItems[0].cartItems[key].quantity}</div>
                                        </div>
                                        <div className="listSummaryTotal">
                                            <div>Total:</div>
                                            <div>${shoppingCartItems[0].cartItems[key].productItem.cost * shoppingCartItems[0].cartItems[key].quantity}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="checkoutdisplay__list__right">
                    <div className="checkoutdisplay__list__right-top">
                        <div><button className="checkoutbutton">Pay Now (Coming Soon)</button></div>
                        <div>By placing your order, you agree to Plantazon's terms and conditions of use.</div>
                    </div>
                    <div className="checkoutdisplay__list__right-bottom">
                        <div className="ordersummary">
                            <div>Items ({shoppingCartItems[0].cartSize}):</div>
                            <div>{(shoppingCartItems[0].cartTotal).toFixed(2)}</div>
                        </div>
                        <div className="ordersummary">
                            <div>Shipping & Handling:</div>
                            <div>$0.00</div>
                        </div>
                        <div className="ordersummary">
                            <div>Estimated GST/HST:</div>
                            <div>{(shoppingCartItems[0].cartTotal * 0.15).toFixed(2)}</div>
                        </div>
                        <div className="ordertotal">
                            <div>Order Total:</div>
                            <div>{((shoppingCartItems[0].cartTotal * 0.15)+shoppingCartItems[0].cartTotal).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutDisplayElement;