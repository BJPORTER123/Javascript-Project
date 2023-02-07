import { deleteBucketCountry, deleteVisitedCountry } from '../services/CountryService';
import React from 'react';
import './CountryItem.css'
import styled from 'styled-components';
import {Link} from "react-router-dom"

const Flag = styled.p`
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 50px;
    transform: scale(4.5);
`;

const TextContainer = styled.div`
    width: 80%;
    padding-right: 70px;
    color: rgb(1, 8, 8);
    background-color: azure;
    font-size: 0.85rem;
`;

function CountryItem({removeBucketCountry, country, onCountryClicked, bucketDeleteButton, removeVisitedCountry, visitedDeleteButton}) {


    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }
        

    
    const deleteButton = () => {
        if(bucketDeleteButton){ 
            return <button onClick={handleBucketDelete}>Delete</button>
        }
        else if (visitedDeleteButton){ 
            return <button onClick={handleVisitedDelete}>Delete</button>
        }
    }

    const handleBucketDelete = () => {
        deleteBucketCountry(id)
            .then(()=>{
                removeBucketCountry(id)
    })
}

const handleVisitedDelete = () => {
    deleteVisitedCountry(id)
        .then(()=>{
            removeVisitedCountry(id)
})
}

    return (
        <Link to="/countries/:id">
            <li className="country-item" onClick={handleClicked}>
            
                <TextContainer>
                    <h4>{country.name.common}</h4>
                </TextContainer>
                <Flag>{country.flag}</Flag>
                <br/>
                {deleteButton()}
            
            </li>
        </Link>
    );
}



export default CountryItem;
