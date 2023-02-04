import CountryItem from "./CountryItem";

const VisitedList = ({ visitedList }) => {

    const VisitedCountries = visitedList.map((country)=>{

        return <CountryItem country={country}/>
    })


    return (  
        <>
        {VisitedCountries}
        </>
    );
}

export default VisitedList;