import NavBar from "./NavBar.js";
import { postBucketCountry, postVisitedCountry, deleteBucketCountry } from "../services/CountryService.js"
import { useParams } from "react-router-dom";
import CountryList from "./CountryList.js";


const CountryDetail = ({ removeBucketCountry, onCountryClicked,countries, selectedCountry, addToBucket, addToVisited, bucketList, visitedList }) => {

    const { countryId } = useParams()


    if (!selectedCountry){
        const countryThatShouldBeSelected = countries.find((country) => country.cca2 == countryId)
        onCountryClicked(countryThatShouldBeSelected)
        return <h1>Loading...</h1>
    }

    const onBucketClick = () => {
        if (bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postBucketCountry(selectedCountry)
                .then(() => {
                    addToBucket(selectedCountry)
                })
        }
    }

    const onVisitedClick = () => {
        if (visitedList.filter(country => country.cca2 === selectedCountry.cca2).length === 0 && bucketList.filter(country => country.cca2 === selectedCountry.cca2).length === 0) {
            postVisitedCountry(selectedCountry)
                .then((response) => {
                    const copyOfSelectedCountry = { ...selectedCountry }
                    copyOfSelectedCountry._id = response.insertedId
                    addToVisited(copyOfSelectedCountry)
                    deleteBucketCountry(countryId)
                        .then(() => {
                            removeBucketCountry(countryId)
                        })
                })
        }
    }
    console.log(selectedCountry)

    return (
        <>
            <NavBar />
            <div>

                <img src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} /><br>

                </br>
                {selectedCountry.name.common} <br>
                </br>
                {selectedCountry.capital}
            </div>
            {visitedList.filter(country => country.cca2 === countryId).length === 0 && bucketList.filter(country => country.cca2 === countryId).length === 0
                ? <div>
                    <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Add Bucket</button>
                    <button type="Submit" value='add-to-visited' onClick={onVisitedClick}>Add Visited</button>
                </div>
                : "Added to list!"
            }
        </>
    );
}

export default CountryDetail;