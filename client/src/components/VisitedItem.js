import { deleteVisitedCountry } from '../services/CountryService';
import React from 'react';
import { Link } from "react-router-dom"
import CommentBox from './CommentBox';
import "./VisitedItem.css"
import "./BucketItem.css"

function VisitedItem({ updateVisited, country, onCountryClicked, removeVisitedCountry }) {

    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }


    const handleVisitedDelete = () => {
        deleteVisitedCountry(id)
            .then(() => {
                removeVisitedCountry(id)
            })
    }

    return (
        <div className='visited-item'>
            <li  onClick={handleClicked}>
                <Link to={`/countries/${id}`}>
                    <h4 className='visited-title'>{country.name.common}</h4>
                    <img className='visited-flag' src={country.flags.png} alt={country.flags.alt}/>
                </Link>
            </li>
            <button className='delete-button' onClick={handleVisitedDelete}></button>
            <h6 className='comment-title'>Comments:</h6>
            <p>{country.comment}</p>
            <CommentBox className="comment-box" updateVisited={updateVisited}country={country}/>
        </div>
    );
}



export default VisitedItem;
