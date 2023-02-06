import {Link} from "react-router-dom"
import './Title.css'

const Title = () => {
    return (  
        <>
        <h1 className="title">Travel App</h1>
        <div className="nav-home">
            <nav>
                <ul>
                <li className="title-li">
                    <Link className="title-link" to="/home">Enter</Link>
                </li>
                </ul>
            </nav>
        </div>
        </>
    );
}
 
export default Title;