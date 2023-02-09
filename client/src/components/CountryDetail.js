import NavBar from "./NavBar.js";
import { postBucketCountry, postVisitedCountry, deleteBucketCountry } from "../services/CountryService.js"
import { useParams } from "react-router-dom";
import CountryList from "./CountryList.js";
import Footer from "./Footer.js";


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
            <div className="details-container">
            {selectedCountry._id
                ? <div>
                    <h2 className="country-header">Visited Counrty Log</h2>
                </div>
                : <h2 className="country-header">Counrty Details</h2>
            }                
            <br />
            <img className="flag-image" src={selectedCountry.flags.png} alt={selectedCountry.flags.alt} /><br />

            <div className="country-name">{selectedCountry.name.common}</div>
            {selectedCountry.comment
            ? <div>
            <h3 className="comment-header">Comments:</h3>
            <div className="country-comment">{selectedCountry.comment}</div>
            </div>
            : ""
            }

            <h3 className="capital-header">Capital:</h3>
            <div className="country-capital">{selectedCountry.capital}</div>
            <h3 className="currency-header">Currency:</h3>
            <div className="country-currency">{Object.values(selectedCountry.currencies)[0].name}</div>
            <h3 className="continent-header">Continent</h3>
            <div className="country-continent">{selectedCountry.continents}</div>
            <h3 className="status-header">Visited?</h3>
            </div>

            {visitedList.filter(country => country.cca2 === countryId).length === 0 && bucketList.filter(country => country.cca2 === countryId).length === 0
                ? <div className="details-buttons">
                    <button className="bucket-button" type="Submit" value='add-to-bucket' onClick={onBucketClick} >Add Bucket</button>
                    <button className="visited-button" type="Submit" value='add-to-visited' onClick={onVisitedClick}>Add Visited</button>
                </div>
                : "Added to list!"
            }
            <Footer/>
        </>
    );
}

export default CountryDetail;