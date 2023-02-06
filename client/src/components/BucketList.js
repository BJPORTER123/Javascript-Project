import CountryItem from "./CountryItem";

const BucketList = ({ bucketList, onCountryClicked, handleDelete, setBucketList, removeCountry}) => {


    const BucketCountries = bucketList.map((country)=>{

        return <CountryItem country={country} key={country.tld} bucketDeleteButton={true} onCountryClicked={onCountryClicked} setBucketList={setBucketList} removeCountry={removeCountry}/>
    })

    


    return (  
        <>
        {BucketCountries}
        </>
    );
}

export default BucketList;