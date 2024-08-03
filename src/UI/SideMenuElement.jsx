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
                    <ul>
                        <li>{toggleItems["aboutUs"]? "About Us" : <a onClick={() => showAboutUs()}>About Us</a>}</li>
                        <li>{!toggleItems["aboutUs"]? "Products" :<a onClick={() => showProducts()}>Products</a>}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideMenuElement;