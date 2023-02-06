import React from 'react';
import './CountryItem.css'
import styled from 'styled-components';

const Flag = styled.p`
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 50px;
    transform: scale(5);
`;

const TextContainer = styled.div`
    width: 80%;
    padding-right: 60px;
    color: rgb(1, 8, 8);
    background-color: #fcfeff8f;
    font-size: 0.8rem;
`;

function Country({ country, handleClicked }) {
    return (
        <li className="country-item" onClick={handleClicked}>
            <TextContainer>
                <h4>{country.name.common}</h4>
            </TextContainer>
            <Flag>{country.flag}</Flag>
        </li>
    );
}

export default Country;
