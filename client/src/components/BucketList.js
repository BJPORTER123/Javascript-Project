import CountryItem from "./CountryItem";

const BucketList = ({ bucketList, onCountryClicked, handleDelete }) => {


    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld} bucketDeleteButton={true} onCountryClicked={onCountryClicked} handleDelete={handleDelete}/>
    })

    


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;