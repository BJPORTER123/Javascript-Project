import { useState } from "react";
import { postBucketCountry, postVisitedCountry, } from "../services/CountryService.js";
const CountryDetail = ({ selectedCountry, addToBucket, addToVisited }) => {



    const onBucketClick = () => {
        postBucketCountry(selectedCountry)
        .then(()=>{
            addToBucket(selectedCountry)
        })

    }

    const onVisitedClick = () => {
        postVisitedCountry(selectedCountry)
        .then(()=>{
            addToVisited(selectedCountry)
        })

    }


    return (
        <>
            {selectedCountry.name.common} <br></br>

        
            {selectedCountry.capital} <br>

            </br>
            {selectedCountry.flag}
            <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Bucket List</button>
            <button type="Submit" value='add-to-visited' onClick={onVisitedClick}>Visited List</button>
            

        </>
    );
}

export default CountryDetail;