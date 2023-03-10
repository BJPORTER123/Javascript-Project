import VisitedItem from "./VisitedItem";
import NavBar from "./NavBar";
import "./CountryList.css"
import Footer from "./Footer.js";

const VisitedList = ({ visitedList,updateVisited, removeVisitedCountry, onCountryClicked }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <VisitedItem updateVisited={updateVisited} country={country} key={country.cca2} removeVisitedCountry={removeVisitedCountry} visitedTrue={true} onCountryClicked={onCountryClicked} visitedList={visitedList}/>
    })


    return (  
        <div id="page-container">
            <div id ="content-wrap">
        <NavBar/>
        <h2>Visited List</h2>
        <div className="container">
        {VisitedCountries}
        </div>
        </div>
        <Footer/>
        </div>
    );
}

export default VisitedList;