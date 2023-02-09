import {Link} from "react-router-dom"
import './Title.css'
import Footer from "./components/Footer";

const Title = () => {
    return (  
        <>
        <div className="background">
        <h1 className="title">Around The World</h1>
        <div className="nav-home">
            <nav>
                <ul>
                <li>
                    <Link className="title-link" to="/countries">Enter</Link>
                </li>
                </ul>
            </nav>
        </div>
        <Footer/>
        </div>
        </>
        
    );
}
 
export default Title;