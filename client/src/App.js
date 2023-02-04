import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Title from "./Title";

const App = () => {
    return (
       <>
        <Routes>
            <Route path="/" element={<Title/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
       </>
    );
}

export default App;



