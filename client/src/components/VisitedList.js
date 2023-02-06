import CountryItem from "./CountryItem";

const VisitedList = ({ visitedList }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country} key={country.tld}/>
    })


    return (  
        <>
        {VisitedCountries}
        </>
    );
}

export default VisitedList;