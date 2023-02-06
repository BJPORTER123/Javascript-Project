import CountryItem from "./CountryItem";
import './CountryList.css'


const CountryList = ({countriesSlice, onCountryClicked}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.tld}/>
    })

        

    return (  
        <>
        <h3 className="list-title">Countries to Visit</h3>
        <div className="container">
            {CountryItems}
        </div>

        </>
    );
}
 
export default CountryList;

