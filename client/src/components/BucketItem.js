import { deleteBucketCountry, deleteVisitedCountry, postVisitedCountry } from '../services/CountryService';
import React from 'react';
import { Link } from "react-router-dom"
import "./BucketItem.css"



function BucketItem({ removeBucketCountry, country, onCountryClicked, bucketTrue, removeVisitedCountry, visitedTrue, addToVisited, bucketList }) {

    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }

    const deleteButton = () => {
        if (bucketTrue) {
            return <button className='delete-button' onClick={handleBucketDelete}/>
        }
        else if (visitedTrue) {
            return <button className='delete-button' onClick={handleVisitedDelete}/>
        }
    }

    const moveToVisitedButton = () => {
        if (bucketTrue) {
            return <button onClick={handleMove} >Visited!</button>
        }
    }

    const handleBucketDelete = () => {
        deleteBucketCountry(id)
            .then(() => {
                removeBucketCountry(id)
            })
    }

    const handleVisitedDelete = () => {
        deleteVisitedCountry(id)
            .then(() => {
                removeVisitedCountry(id)
            })
    }

    const handleMove = () => {
        const filteredCountry = bucketList.filter(country => country.cca2 === id)
        // TODO: refactor to use find 
        console.log(filteredCountry[0])
            postVisitedCountry(filteredCountry[0])
                .then((response) => { 
                    filteredCountry[0]._id = response.insertedId
                    addToVisited(filteredCountry[0]) 
                })
            handleBucketDelete()
    }
   
    return (
        <div className="bucket-item">
            <li onClick={handleClicked}>
                <Link to={`/countries/${id}`}>
                    <h4 className='bucket-title'>{country.name.common}</h4>
                    <img className='bucket-flag'src={country.flags.png} alt={country.flags.alt}/>
                </Link>
            </li>
            {deleteButton()}
            {moveToVisitedButton()}
        </div>
    );
 }
    
    
    
export default BucketItem;
        
                