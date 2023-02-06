import { useState } from "react";
import { postBucketCountry, postVisitedCountry, } from "../services/CountryService.js";

const CountryDetail = ({ selectedCountry, addToBucket, addToVisited, bucketList }) => {



    const onBucketClick = () => {
        if(bucketList.filter(country => country.tld === selectedCountry.tld).length === 0) {
            postBucketCountry(selectedCountry)
            .then(()=>{
            addToBucket(selectedCountry)
        })
        }
        
        // if(selectedCountry.tld !== )
        //for countryId in bucket list, if countryId ==== selectedId don't add, else Add to bucket list
        //if selectedCountry(tld) is not in bucketList, add selectedCountry to bucketList
        

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