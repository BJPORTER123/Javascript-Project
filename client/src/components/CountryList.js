import CountryItem from "./CountryItem";
import './CountryList.css'


const CountryList = ({countriesSlice, onCountryClicked}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.cca2}/>
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

