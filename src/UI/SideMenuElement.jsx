import "./ui.scss";

import { useSelector, useDispatch } from "react-redux";
import { toggleAction } from '../Controller/toggleSlice';

function SideMenuElement(props){
    const toggleItems = useSelector((state) => state.toggleStates);
    const dispatch = useDispatch();
    
    const showAboutUs = () => {
        dispatch(toggleAction("aboutUs"));
        dispatch(toggleAction("sideMenu"));
    }

    const showProducts = () => {
        dispatch(toggleAction("sideMenu"));
        dispatch(toggleAction("aboutUs"));
    }

    return(
        <div className="sidemenu">
            <div className="sidemenu__list">
                <div className="sidemenu__list__item">
                    <h1>Side Menu</h1>
                    <ul>
                        <li>{toggleItems["aboutUs"]? "About Us" : <button onClick={() => showAboutUs()}>About Us</button>}</li>
                        <li>{!toggleItems["aboutUs"]? "Products" :<button onClick={() => showProducts()}>Products</button>}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenuElement;