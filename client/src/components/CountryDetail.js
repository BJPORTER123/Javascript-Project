import NavBar from "./NavBar.js";
import { postBucketCountry, postVisitedCountry, } from "../services/CountryService.js"
import { useParams } from "react-router-dom";

const CountryDetail = ({ selectedCountry, addToBucket, addToVisited, bucketList, visitedList }) => {


    const onBucketClick = () => {
        if(bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postBucketCountry(selectedCountry)
            .then(()=>{
            addToBucket(selectedCountry)
        })
        }
    }

    const onVisitedClick = () => {
        if(visitedList.filter(country => country.cca2 === selectedCountry.cca2).length === 0){
            postVisitedCountry(selectedCountry)
            .then(()=>{
            addToVisited(selectedCountry)
        })
        }
    }

    const bucketButton = () => {
        if (visitedList.filter(country => country === selectedCountry).length === 1) {
            return <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Add Bucket</button>
        }
    }

    return (
        <>
            <NavBar/>
            {selectedCountry.name.common} <br></br>
            {selectedCountry.capital} <br>
            </br>
            {selectedCountry.flag}
            {bucketButton()}
            <button type="Submit" value='add-to-visited' onClick={onVisitedClick}>Add Visited</button>
        </>
    );
}

export default CountryDetail;