import "./ui.scss";

import ProductItemElement from "./ProductItemElement";

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
        dispatch(toggleAction("checkoutScreen"));
    };


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
                <button onClick={() => handleToggleCheckout()}>checkout <span className="productdisplay__checkout__total">($ {shoppingCartItems[0].cartTotal.toFixed(2)})</span></button>
            </div>
        </div>
    )
}

export default CartDisplayElement;