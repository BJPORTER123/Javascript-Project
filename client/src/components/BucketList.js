import CountryItem from "./CountryItem";
import NavBar from "./NavBar";

const BucketList = ({ bucketList, onCountryClicked, removeBucketCountry}) => {


    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.cca2} bucketDeleteButton={true} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry}/>
    })


    return (  
        <>
        <NavBar/>
        {BucketCountries}
        </>
    );
}

export default BucketList;