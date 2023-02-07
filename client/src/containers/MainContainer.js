import React, { useEffect, useState } from 'react'
import BucketList from '../components/BucketList';
import CountryDetail from '../components/CountryDetail';
import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import VisitedList from '../components/VisitedList';
import SearchBar from '../components/SearchBar';
import { getBucketCountries, getVisitedCountries, postCountry} from '../services/CountryService';


const MainContainer = () => {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [bucketList, setBucketList] = useState([])
    const [visitedList, setVisitedList] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        if (searchCountry) {
            fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
                .then(res => res.json())
                // .then(data => setCountries(data))
                .then(data => data ? setCountries(data)
                : setError('No results found'))
            .catch(err => console.error(`Loading error: ${err}`))
        }
    }, [searchCountry])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, []);

    useEffect(() => {
        getBucketCountries()
            .then(bucketCountries => {
                setBucketList(bucketCountries)
            })

    }, []);

    useEffect(() => {
        getVisitedCountries()
            .then(visitedCountries => {
                setVisitedList(visitedCountries)
            })

    }, []);

    const onSubmitSearch = (searchCountry) => {
        setSearchCountry(searchCountry)
        setError(null)
    }

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

    
    const removeBucketCountry = (id) => {
        const countriesToKeep = bucketList.filter(country => country.tld !== id)
        setBucketList(countriesToKeep)
      }

      const removeVisitedCountry = (id) => {
        const countriesToKeep = visitedList.filter(country => country.tld !== id)
        setVisitedList(countriesToKeep)
      }

    return (
        <>
            <NavBar />
            <SearchBar onSubmitSearch={onSubmitSearch}/>
            <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} />
            <h3>Country Card:</h3>
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} addToBucket={addToBucket} addToVisited={addToVisited} bucketList={bucketList} visitedList={visitedList} /> : null}

            <h3>Bucket List:</h3>
            {bucketList ? <BucketList bucketList={bucketList} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry}/> : null}

            <h3>Visited List:</h3>
            {visitedList ? <VisitedList visitedList={visitedList} onCountryClicked={onCountryClicked} removeVisitedCountry={removeVisitedCountry}/> : null}


        </>

    )
}

export default MainContainer