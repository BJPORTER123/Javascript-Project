import CountryItem from "./CountryItem";
import './CountryList.css'


const SearchedCountries = ({searchedCountries, onCountryClicked}) => {

    const CountryItems = searchedCountries.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.cca2}/>
    })

        

    return (  
        <>
        <h3 className="list-title">Search Results</h3>
        <div className="container">
            {CountryItems}
        </div>

        </>
    );
}

export default SearchedCountries;

