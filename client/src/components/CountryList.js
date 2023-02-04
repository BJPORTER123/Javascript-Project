import CountryItem from "./CountryItem";

const CountryList = ({countriesSlice, onCountryClicked}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked}/>
    })


    return (  
        <>
        {CountryItems}
        </>
    );
}
 
export default CountryList;

