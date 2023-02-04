import CountryItem from "./CountryItem";

const CountryList = ({countriesSlice, onCountryClicked}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country} onCountryClicked={onCountryClicked}/>
    })


    return (  
        <>
        <h3>Countries to Visit</h3>
        <section>
        {CountryItems}
        </section>
        </>
    );
}
 
export default CountryList;

