import CountryItem from "./CountryItem";
import './CountryList.css'


const CountryList = ({countriesSlice, onCountryClicked, visitedList, onBucketClick, onVisitedClick}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.cca2} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick}/>
    })

        

    return (  
        <>
        <div className="container">
            {CountryItems}
        </div>

        </>
    );
}
 
export default CountryList;

