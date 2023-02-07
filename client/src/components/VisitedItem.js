import { deleteVisitedCountry } from '../services/CountryService';
import React from 'react';
import './CountryItem.css'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import CommentBox from './CommentBox';

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

function VisitedItem({ country, onCountryClicked, removeVisitedCountry }) {

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
        <div>
            <li className="country-item" onClick={handleClicked}>
                <Link to={`/countries/${id}`}>
                    <TextContainer>
                        <h4>{country.name.common}</h4>
                    </TextContainer>
                    <Flag>{country.flag}</Flag>
                </Link>
            </li>
            <button onClick={handleVisitedDelete}>Delete</button>
            <CommentBox/>
        </div>
    );
}



export default VisitedItem;
