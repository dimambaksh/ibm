import "./ui.scss";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity } from '../Controller/productSlice';
import { filterResults } from "../Controller/filterSlice";
import { toggleAction } from '../Controller/toggleSlice';

const ProductDisplayElement = () => {
    const dispatch = useDispatch();
    const productListItems = useSelector((state) => state.productList);
    const productListFilter = useSelector((state) => state.filterResult);
    const toggleItems = useSelector((state) => state.toggleStates);
    // console.log(productListFilter);
    // console.log(productListFilter["productlist"]);
    console.log("Show : "+toggleItems[3].toggleState);

    const checkData = () => {
        console.log("Is data loaded?");
        setProductData();
        dispatch(toggleAction(4));
    }

    const setProductData = () => {
        console.log("Data loaded...");
    };

    const getCategoryData = () => {
        let currentData = filterProductData();

        let categoryList = currentData.reduce((accumulator, record) => { 
            if (!accumulator[record.category]){
                accumulator[record.category] = [];
            }
            return accumulator;
        }, {});

        console.log(Object.keys(categoryList));
        
        return Object.keys(categoryList);
    }

    const filterProductData = () =>{
        let newProductList = productListFilter["productlist"].filter.length > 0
            ? productListItems
                .filter(
                (item) => (item.name.toLowerCase().indexOf(productListFilter["productlist"].filter.toLowerCase()) >= 0) ||
                (item.category.toLowerCase().indexOf(productListFilter["productlist"].filter.toLowerCase()) >= 0) ||
                (item.description.toLowerCase().indexOf(productListFilter["productlist"].filter.toLowerCase()) >= 0) 
                )
                .map((result) => {
                    return result;
                })
            : productListItems;

        return newProductList;
    }

    const handleProductListAdd = (index) =>{
        dispatch(increaseProductQuantity(index, productListItems[index]));
        dispatch(addToCart(productListItems[index]));
    }
    
    const handleProductListDelete = (index) =>{
        dispatch(reduceProductQuantity(index));
        dispatch(removeFromCart(productListItems[index]));
    }

    return(
        <div className="productdisplay">
            {toggleItems[4].toggleState ?
                <h1>Loading ... {checkData()}</h1> :
                <>
                    {toggleItems[3].toggleState ?
                        <div className="productdisplay__list">
                        {
                            getCategoryData().map((key) => (
                                <>
                                    <div className="productdisplay__list__category">
                                        <h4>{key}</h4>
                                    </div>
                                    <div className="productdisplay__list__products">
                                    { 
                                        filterProductData().filter(
                                        (item) => (item.category == key)
                                        ).map( (item) => (
                                                <div key={item.id}>
                                                    <div className="productdisplay__list__image">
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                    <div> {item.id} </div>
                                                    <div> {item.name} </div>
                                                    <div> {item.category} </div>
                                                    <div> {item.description} </div>
                                                    <div> ${item.cost} </div>
                                                    <div>
                                                        <button onClick={() => handleProductListAdd(item.id)}> &#43; </button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleProductListDelete(item.id)}> &ndash; </button>
                                                    </div>
                                                </div>
                                        ))
                                    }
                                    </div>
                                </>  
                            ))
                        }
                        </div>
                    :
                        <div className="productdisplay__list">
                            <div className="productdisplay__list__products">
                                {filterProductData().map((item) => (
                                    <div key={item.id}>
                                        <div className="productdisplay__list__image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div> {item.id} </div>
                                        <div> {item.name} </div>
                                        <div> {item.category} </div>
                                        <div> {item.description} </div>
                                        <div> ${item.cost} </div>
                                        <div>
                                            <button onClick={() => handleProductListAdd(item.id)}> &#43; </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleProductListDelete(item.id)}> &ndash; </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default ProductDisplayElement;