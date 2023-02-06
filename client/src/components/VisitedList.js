import CountryItem from "./CountryItem";

const VisitedList = ({ visitedList, removeVisitedCountry }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country} key={country.tld} removeVisitedCountry={removeVisitedCountry} visitedDeleteButton={true}/>
    })


    return (  
        <>
        {VisitedCountries}
        </>
    );
}

export default VisitedList;