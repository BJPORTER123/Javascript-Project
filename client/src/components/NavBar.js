import {Link} from "react-router-dom"
import globe from "../images/navlogo.png"
import "./NavBar.css"

const NavBar = ({resetSearchedItem}) => {

    const onLinkClick = () => {
        resetSearchedItem()
    }

    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link" to="/" onClick={onLinkClick}>
                    <img id= "globe-img" src={globe} alt="Logo" width="55" height="55" />
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/countries" onClick={onLinkClick}>Home</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/bucket" onClick={onLinkClick}>Bucket List</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/visited" onClick={onLinkClick}>Visited Countries</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;