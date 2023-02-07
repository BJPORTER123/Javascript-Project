import CountryItem from "./CountryItem";
import NavBar from "./NavBar";

const VisitedList = ({ visitedList, removeVisitedCountry, onCountryClicked }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country} key={country.cca2} removeVisitedCountry={removeVisitedCountry} visitedTrue={true} onCountryClicked={onCountryClicked} visitedList={visitedList}/>
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