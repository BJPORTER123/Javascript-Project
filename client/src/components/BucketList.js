import CountryItem from "./CountryItem";
import NavBar from "./NavBar";

const BucketList = ({ bucketList, onCountryClicked, removeBucketCountry, addToVisited }) => {


    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.cca2} bucketTrue={true} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry} bucketList={bucketList} addToVisited={addToVisited}/>
    })


    return (  
        <>
        <NavBar/>
        {BucketCountries}
        </>
    );
}

export default BucketList;