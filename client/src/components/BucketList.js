import CountryItem from "./CountryItem";

const BucketList = ({ bucketList }) => {

    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country}/>
    })


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;