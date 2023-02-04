import React, {useEffect, useState} from 'react'
import CountryList from '../components/CountryList';

const MainContainer = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
       fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

      },[]);

      

    return (
        <>
        <CountryList countriesSlice={countries.slice(0, 20)} />
        </>
    )
}

export default MainContainer