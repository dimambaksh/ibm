import "./ui.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity, deleteProductQuantity } from '../Controller/productSlice';
import { toggleAction } from '../Controller/toggleSlice';

const CartDisplayElement = () => {
    const dispatch = useDispatch();
    const shoppingCartItems = useSelector((state) => state.shoppingCart);

    // console.log("Cart (body): ");
    // console.log(shoppingCartItems[0].cartItems);
    // console.log(Object.keys(shoppingCartItems[0].cartItems));
    //manage cart items and check items and allow decrease of quantity

    const handleProductListAdd = (keyIn) =>{
        console.log("keyIn: "+keyIn);
        shoppingCartItems[0].cartItems[keyIn].productItem.id
        dispatch(increaseProductQuantity(shoppingCartItems[0].cartItems[keyIn].productItem.id));
        //console.log(shoppingCartItems[0].cartItems[index].productItem);
        dispatch(addToCart(shoppingCartItems[0].cartItems[keyIn].productItem));
    }

    const handleProductListReduce = (keyIn) =>{
        console.log("keyIn: "+keyIn);
        dispatch(reduceProductQuantity(shoppingCartItems[0].cartItems[keyIn].productItem.id));
        dispatch(removeFromCart(shoppingCartItems[0].cartItems[keyIn].productItem));
    }

    const handleProductListDelete = (keyIn) =>{
        console.log("keyIn: "+keyIn);
        dispatch(deleteProductQuantity(shoppingCartItems[0].cartItems[keyIn].productItem.id));
        dispatch(deleteFromCart(shoppingCartItems[0].cartItems[keyIn].productItem));
    }
   
    const handleToggleCheckout = () => {
        dispatch(toggleAction(2));
    };


    return(
        <div className="productdisplay">
            <h1>Shopping Cart</h1>
            <div className="productdisplay__list">
                <div className="productdisplay__list__products">
                    {Object.keys(shoppingCartItems[0].cartItems).map((key) => (
                        <div key={key}>
                            <div className="productdisplay__list__image">
                                <img src={shoppingCartItems[0].cartItems[key].productItem.image} alt={shoppingCartItems[0].cartItems[key].productItem.name} />
                            </div>
                            <div> {shoppingCartItems[0].cartItems[key].productItem.id} </div>
                            <div> {shoppingCartItems[0].cartItems[key].productItem.name} </div>
                            <div> Total: ${shoppingCartItems[0].cartItems[key].productItem.cost * shoppingCartItems[0].cartItems[key].quantity} </div>
                            <div>
                                <button onClick={() => handleProductListAdd(key)}> &#43; </button> 
                                <span>{shoppingCartItems[0].cartItems[key].quantity}</span> 
                                <button onClick={() => handleProductListReduce(key)}> &ndash; </button>
                                <button onClick={() => handleProductListDelete(key)}> del </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={() => handleToggleCheckout()}>
                Checkout
            </button>
        </div>
    )
}

export default CartDisplayElement;