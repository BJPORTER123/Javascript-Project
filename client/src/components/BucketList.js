import CountryItem from "./CountryItem";

const BucketList = ({ bucketList, onCountryClicked, removeBucketCountry}) => {


    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld} bucketDeleteButton={true} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry}/>
    })

    


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;