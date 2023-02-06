import CountryItem from "./CountryItem";

const BucketList = ({ bucketList }) => {

    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld}/>
    })


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;