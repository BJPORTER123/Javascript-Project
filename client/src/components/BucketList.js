import BucketItem from "./BucketItem";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Footer.css"

const BucketList = ({ bucketList, onCountryClicked, removeBucketCountry, addToVisited }) => {


    const BucketCountries = bucketList.map((country)=>{

        return <BucketItem country={country} key={country.cca2} bucketTrue={true} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry} bucketList={bucketList} addToVisited={addToVisited}/>
    })


    return (  
        <div id="page-container">
            <div id ="content-wrap">
        <NavBar/>
        <h2>Bucket List</h2>
        <div className="container">
        {BucketCountries}
        </div>
        </div>
        <Footer/>
        </div>
    );
}

export default BucketList;