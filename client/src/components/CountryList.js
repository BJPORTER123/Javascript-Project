import CountryItem from "./CountryItem";

const CountryList = ({countriesSlice}) => {

    const CountryItems = countriesSlice.map((country)=>{
        return <CountryItem country={country}/>
    })


    return (  
        <>
        {CountryItems}
        </>
    );
}
 
export default CountryList;

