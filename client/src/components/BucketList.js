import CountryItem from "./CountryItem";

const BucketList = ({ bucketList }) => {

    const deleteBucketItem = 1

    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld} deleteBucketItem={true}/>
    })


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;