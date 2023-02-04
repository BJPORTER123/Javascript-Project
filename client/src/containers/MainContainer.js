import React, {useEffect, useState} from 'react'
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';

const MainContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    useEffect(() => {
       fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    },[]);

    const onCountryClicked = (country)=>{
        setSelectedCountry(country)
    } 


    return (
        <>
        <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked}/>
        <CountryDetail selectedCountry={selectedCountry}/>
        </>
    
    )
}

export default MainContainer