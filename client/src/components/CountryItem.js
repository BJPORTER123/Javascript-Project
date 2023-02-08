import { deleteBucketCountry, deleteVisitedCountry, postVisitedCountry } from '../services/CountryService';
import React from 'react';
import './CountryItem.css'
import { Link } from "react-router-dom"



function CountryItem({ removeBucketCountry, country, onCountryClicked, bucketTrue, removeVisitedCountry, visitedTrue, addToVisited, bucketList, visitedList, onBucketClick, onVisitedClick}) {

    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }

    // const deleteButton = () => {
    //     if (bucketTrue) {
    //         return <button onClick={handleBucketDelete}>Delete</button>
    //     }
    //     else if (visitedTrue) {
    //         return <button onClick={handleVisitedDelete}>Delete</button>
    //     }
    // }


    // const addToVisitedButton = () => {
    //         return <button onClick={handleMove} >Add To Visited</button>
    //     }


    // const handleBucketDelete = () => {
    //     deleteBucketCountry(id)
    //         .then(() => {
    //             removeBucketCountry(id)
    //         })
    // }

    // const handleVisitedDelete = () => {
    //     deleteVisitedCountry(id)
    //         .then(() => {
    //             removeVisitedCountry(id)
    //         })
    // }

    // const handleMove = () => {
    //     const filteredCountry = bucketList.filter(country => country.cca2 === id)
    //     // TODO: refactor to use find 
    //     console.log(filteredCountry[0])
    //         postVisitedCountry(filteredCountry[0])
    //             .then((response) => { 
    //                 filteredCountry[0]._id = response.insertedId
    //                 addToVisited(filteredCountry[0]) 
    //             })
    //         handleBucketDelete()
    // }


    return (
        <div>
        <li className="country-item" onClick={handleClicked}>
            <Link to={`/countries/${id}`}>
                
                <h4 className='country-title'>{country.name.common}</h4>
                <img className="flag" src={country.flags.png} alt={country.flags.alt}/>
            </Link>
        </li>
        {
        // visitedList.filter(filteredCountry => filteredCountry.cca2 === country.cca2).length === 0 && bucketList.filter(filteredCountry => filteredCountry.cca2 === country.cca2).length === 0 ? 
        <div>
                    <button type="Submit" value='add-to-bucket' onClick={onBucketClick} >Add Bucket</button>
                    <button type="Submit" value='add-to-visited' onClick={() => onVisitedClick(country)}>Add Visited</button>
                </div>
                // : "Added to list!"
            }
    </div>
        
    );
}



export default CountryItem;
