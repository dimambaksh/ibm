import "./ui.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleAction } from '../Controller/toggleSlice';
import AboutUsElement from "./AboutUsElement";

function LandingPageElement(){
    const toggleItems = useSelector((state) => state.toggleStates);
    const dispatch = useDispatch();
    
    const showProductList = () => {
        dispatch(toggleAction("landingPage"));
    }

    return(
        <section className="landingpage">
            <article className="landingpage__article">
                <div className="landingpage__article__background"></div>
                <AboutUsElement/>
                <div className="landingpage__article__item">
                    <button onClick={() => showProductList()}>get started</button>
                </div>
            </article>
        </section>
    )
}

export default LandingPageElement;