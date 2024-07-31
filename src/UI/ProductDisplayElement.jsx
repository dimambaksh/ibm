import "./ui.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity } from '../Controller/productSlice';

const ProductDisplayElement = () => {
    const dispatch = useDispatch();
    const shoppingCartItems = useSelector((state) => state.shoppingCart);
    const productListItems = useSelector((state) => state.productList);

    console.log("Cart (body): "+shoppingCartItems[0].cartItems);
    
    const handleProductListAdd = (index) =>{
        dispatch(increaseProductQuantity(index));
        dispatch(addToCart(0));
    }
    
    const handleProductListDelete = (index) =>{
        dispatch(reduceProductQuantity(index));
        dispatch(removeFromCart(0));
    }

    return(
        <div className="productdisplay">
            <h1>Products</h1>
            <div className="productdisplay__list">
                {productListItems.map((item, index) => (
                    <div key={index}>
                        <div className="productdisplay__list__image">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div> {item.name} </div>
                        <div> ${item.cost} </div>
                        <div>
                            <button onClick={() => handleProductListAdd(index)}> &#43; </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleProductListDelete(index)}> &ndash; </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDisplayElement;