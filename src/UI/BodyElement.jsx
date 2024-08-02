import "./ui.scss";

import ProductDisplayElement from "./ProductDisplayElement";
import CartDisplayElement from "./CartDisplayElement";
import CheckoutDisplayElement from "./CheckoutDisplayElement";
import { useSelector } from "react-redux";

const BodyElement = () => {   
  const toggleItems = useSelector((state) => state.toggleStates);
//   console.log("Product State change (body): "+toggleItems[1].toggleState);
//   console.log("Checkout State change (body): "+toggleItems[2].toggleState);

    return(
        <section className="pagebody">
            <article className="pagebody__article">
                {toggleItems[2].toggleState ?<CheckoutDisplayElement/> : toggleItems[1].toggleState ? <CartDisplayElement/> : <ProductDisplayElement />}
            </article>
        </section>
    )
}

export default BodyElement;