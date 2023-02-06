import React, { useEffect, useState } from 'react'
import BucketList from '../components/BucketList';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import VisitedList from '../components/VisitedList';
import { postCountry } from '../services/CountryService';

const MainContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [bucketList, setBucketList] = useState([])
    const [visitedList, setVisitedList] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);

    const onCountryClicked = (country) => {
        setSelectedCountry(country)
        console.log(country)
    }

    const addToBucket = (selectedCountry) => {
        const copyOfBucket = [...bucketList]
        copyOfBucket.push(selectedCountry)
        setBucketList(copyOfBucket)
    } 



    const addToVisited = (selectedCountry) => {
        const copyOfVisited = [...visitedList]
        copyOfVisited.push(selectedCountry)
        setVisitedList(copyOfVisited)
    } 


    return (
        <>
            <NavBar/>
            <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} /> 
            <h3>Country Card:</h3>
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} addToBucket={addToBucket} addToVisited={addToVisited} /> : null} 
        
            <h3>Bucket List:</h3>
            {bucketList ? <BucketList bucketList={bucketList} /> : null} 
            
            <h3>Visited List:</h3>
            {visitedList ? <VisitedList visitedList={visitedList} /> : null} 
        
            
        </>

    )
}

export default MainContainer