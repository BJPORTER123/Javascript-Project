import React from 'react';
import './CountryItem.css'
import styled from 'styled-components';

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
    background-color: #fcfeff8f;
    font-size: 0.85rem;
`;

function CountryItem({ country, onCountryClicked }) {


    const handleClicked = () => {
        onCountryClicked(country)
    }

    return (
        <li className="country-item" onClick={handleClicked}>
            <TextContainer>
                <h4>{country.name.common}</h4>
            </TextContainer>
            <Flag>{country.flag}</Flag>
        </li>
    );
}



export default CountryItem;
