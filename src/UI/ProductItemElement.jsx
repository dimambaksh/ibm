import "./ui.scss";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity, deleteProductQuantity } from '../Controller/productSlice';

const ProductItemElement = (props) => {
    const isCart = props.cart;
    const cartItem = props.item;
    const item = isCart? props.item.productItem : props.item;
    const dispatch = useDispatch();
    
    const productListItems = useSelector((state) => state.productList);

    const handleProductListAdd = (index) =>{
        dispatch(increaseProductQuantity(index, productListItems[index]));
        dispatch(addToCart(productListItems[index]));
    }
    
    const handleProductListReduce = (index) =>{
        dispatch(reduceProductQuantity(index));
        dispatch(removeFromCart(productListItems[index]));
    }

    const handleProductListDelete = (index) =>{
        dispatch(deleteProductQuantity(index));
        dispatch(deleteFromCart(productListItems[index]));
    }

    return(
        <div className="productitem" key={item.id}>
            <div className="productitem__top">
                <div className="productitem__left">
                    <div className="productitem__image">
                        <img src={item.image} alt={item.name} />
                    </div>
                </div>
                <div className="productitem__right">
                    <div className="productitem__name"> {item.name} </div>
                    <div className="productitem__category"> {item.category} </div>
                    <div className="productitem__description"> {item.description} </div>
                     <div className="productitem__price">
                        <span className="productitem__price__symbol">$</span>
                        <span className="productitem__price__cost">{(item.cost).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="productitem__bottom">
                <div className="productitem__total">
                    {isCart &&
                        <>
                            <span className="productitem__price__symbol">$</span>
                            <span className="productitem__price__cost">{ (cartItem.quantity * item.cost).toFixed(2) }</span>
                        </>
                    }
                </div>
                <div className="productitem__adjuster">
                    <button onClick={() => handleProductListAdd(item.id)}> &#43; </button>
                    <span className="productitem__quantity">{isCart ? cartItem.quantity : item.quantity }</span>
                    <button onClick={() => handleProductListReduce(item.id)}> &ndash; </button>
                    {isCart &&
                        <button onClick={() => handleProductListDelete(item.id)}>
                            <img className="productitem__adjuster__icon" width="12px" height="12px" src="./icon-delete.svg"></img> 
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItemElement;