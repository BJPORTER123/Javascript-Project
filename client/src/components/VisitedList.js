import CountryItem from "./CountryItem";
import NavBar from "./NavBar";

const VisitedList = ({ visitedList, removeVisitedCountry, onCountryClicked }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country} key={country.tld} removeVisitedCountry={removeVisitedCountry} visitedDeleteButton={true} onCountryClicked={onCountryClicked}/>
    })


    return (  
        <>
        <NavBar/>
        {VisitedCountries}
        </>
    );
}

export default VisitedList;