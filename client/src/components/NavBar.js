import {Link} from "react-router-dom"
import globe from "../images/navlogo.png"
import "./NavBar.css"

const NavBar = () => {
    return (  
        <>
        <nav className="nav-bar">
            <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link" to="/">
                    <img id= "globe-img" src={globe} alt="Logo" width="55" height="55" />
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/countries">Home</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/bucket">Bucketlist</Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/visited">Visited Countries</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;