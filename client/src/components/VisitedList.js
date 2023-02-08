import VisitedItem from "./VisitedItem";
import NavBar from "./NavBar";

const VisitedList = ({ visitedList,updateVisited, removeVisitedCountry, onCountryClicked }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <VisitedItem updateVisited={updateVisited} country={country} key={country.cca2} removeVisitedCountry={removeVisitedCountry} visitedTrue={true} onCountryClicked={onCountryClicked} visitedList={visitedList}/>
    })


    return (  
        <>
        <NavBar/>
        <h2>Visited List</h2>
        {VisitedCountries}

        </>
    );
}

export default VisitedList;