import NavBar from "./NavBar.js";
import { postBucketCountry, postVisitedCountry, deleteBucketCountry } from "../services/CountryService.js"
import { useParams } from "react-router-dom";

const CountryDetail = ({ removeBucketCountry, selectedCountry, addToBucket, addToVisited, bucketList, visitedList }) => {

    const {countryId} = useParams()

    const onBucketClick = () => {
        if(bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postBucketCountry(selectedCountry)
            .then(()=>{
            addToBucket(selectedCountry)
        })
        }
    }

    const onVisitedClick = () => {
        if(visitedList.filter(country => country.cca2 === selectedCountry.cca2).length === 0 && bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postVisitedCountry(selectedCountry)
            .then(()=>{
            addToVisited(selectedCountry)
            .then(() => {
            deleteBucketCountry(countryId)
                .then(() => {
                removeBucketCountry(countryId)
            })
            })
        })
        }
    }

    // const handleMove = () => {
    //     const filteredCountry = bucketList.filter(country => country.cca2 === id)
    //     console.log(filteredCountry[0])
    //         postVisitedCountry(filteredCountry[0])
    //             .then(() => { addToVisited(filteredCountry[0]) })
    //         handleBucketDelete()
    // }
    //On CountryDetail page, the Add Visited button should delete the country from the BucketList if it's already there
    //filter through BucketList with an id, if the

    return (
        <>
            <NavBar/>
            {selectedCountry.name.common} <br></br>
            {selectedCountry.capital} <br>
            </br>
            {selectedCountry.flag}
            {visitedList.filter(country => country.cca2 === countryId).length === 0
                ? <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Add Bucket</button>
                : "Already Visited "
            }
            <button type="Submit" value='add-to-visited' onClick={onVisitedClick}>Add Visited</button>
        </>
    );
}

export default CountryDetail;