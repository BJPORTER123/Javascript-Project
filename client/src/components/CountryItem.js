import { deleteBucketCountry, deleteVisitedCountry, postVisitedCountry } from '../services/CountryService';
import React from 'react';
import './CountryItem.css'
import styled from 'styled-components';
import { Link } from "react-router-dom"

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

function CountryItem({ removeBucketCountry, country, onCountryClicked, bucketTrue, removeVisitedCountry, visitedTrue, addToVisited, bucketList }) {

    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }

    const deleteButton = () => {
        if (bucketTrue) {
            return <button onClick={handleBucketDelete}>Delete</button>
        }
        else if (visitedTrue) {
            return <button onClick={handleVisitedDelete}>Delete</button>
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
        console.log(filteredCountry[0])
            postVisitedCountry(filteredCountry[0])
                .then(() => { addToVisited(filteredCountry[0]) })
            handleBucketDelete()
    }

    return (
        <div>
            <li className="country-item" onClick={handleClicked}>
                <Link to={`/countries/${id}`}>
                    <TextContainer>
                        <h4>{country.name.common}</h4>
                    </TextContainer>
                    <Flag>{country.flag}</Flag>
                </Link>
            </li>
            {deleteButton()}
            {moveToVisitedButton()}
        </div>
    );
}



export default CountryItem;
