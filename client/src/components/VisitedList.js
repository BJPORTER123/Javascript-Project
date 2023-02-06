import CountryItem from "./CountryItem";

const VisitedList = ({ visitedList, removeVisitedCountry, onCountryClicked }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country} key={country.tld} removeVisitedCountry={removeVisitedCountry} visitedDeleteButton={true} onCountryClicked={onCountryClicked}/>
    })


    return (  
        <>
        {VisitedCountries}
        </>
    );
}

export default VisitedList;