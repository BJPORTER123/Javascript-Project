import {Link} from "react-router-dom"
import globe from "../images/navlogo.png"
import "./NavBar.css"

const NavBar = () => {
    return (  
        <>
        <nav>
            <ul className="nav-li">
            <li>
                <Link className="nav-link" to="/">
                    <img src={globe} alt="Logo" width="55" height="55" />
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/home">Home</Link>
            </li>
            </ul>
        </nav>
        </>
    );
}
 
export default NavBar;