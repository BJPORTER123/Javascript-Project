import BucketItem from "./BucketItem";
import NavBar from "./NavBar";

const BucketList = ({ bucketList, onCountryClicked, removeBucketCountry, addToVisited }) => {


    const BucketCountries = bucketList.map((country)=>{

        return <BucketItem country={country} key={country.cca2} bucketTrue={true} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry} bucketList={bucketList} addToVisited={addToVisited}/>
    })


    return (  
        <>
        <NavBar/>
        <h2>Bucket List</h2>
        <div className="container">
        {BucketCountries}
        </div>
        </>
    );
}

export default BucketList;