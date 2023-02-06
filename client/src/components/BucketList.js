import CountryItem from "./CountryItem";

const BucketList = ({ bucketList, onCountryClicked }) => {

    const deleteBucketItem = 1

    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld} deleteBucketItem={true} onCountryClicked={onCountryClicked}/>
    })


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;