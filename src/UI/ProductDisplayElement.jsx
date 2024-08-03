import "./ui.scss";

import ProductItemElement from "./ProductItemElement";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from '../Controller/cartSlice';
import { increaseProductQuantity, reduceProductQuantity } from '../Controller/productSlice';
import { toggleAction } from '../Controller/toggleSlice';

const ProductDisplayElement = () => {
    const dispatch = useDispatch();
    const productListItems = useSelector((state) => state.productList);
    const productListFilter = useSelector((state) => state.filterResult);
    const toggleItems = useSelector((state) => state.toggleStates);
    console.log("Page Loading : "+toggleItems["pageLoading"]);

    const checkData = () => {
        console.log("Is data loaded?");
        setProductData();
        dispatch(toggleAction("pageLoading"));
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

    return(
        <div className="productdisplay">
            {toggleItems["pageLoading"] ?
                <h1>Loading ... {checkData()}</h1> :
                <>
                    {toggleItems["showCategory"] ?
                        <div className="productdisplay__list">
                        {
                            getCategoryData().map((key) => (
                                <>
                                    <div className="productdisplay__list__category">
                                        {key}
                                    </div>
                                    <div className="productdisplay__list__products">
                                    { 
                                        filterProductData().filter(
                                        (item) => (item.category == key)
                                        ).map( (item) => (
                                            <ProductItemElement item={item} cart={false}/>
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
                                    <ProductItemElement item={item} cart={false}/>
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