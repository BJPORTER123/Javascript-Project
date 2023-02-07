import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Title from './Title.js'
import NotFound from './NotFound';
import MainContainer from './containers/MainContainer';
import BucketList from './components/BucketList';
import CountryDetail from './components/CountryDetail';
import VisitedList from './components/VisitedList'
import { getBucketCountries, getVisitedCountries} from './services/CountryService';


const App = () => {


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
        const countriesToKeep = bucketList.filter(country => country.cca2 !== id)
        setBucketList(countriesToKeep)
      }

      const removeVisitedCountry = (id) => {
        const countriesToKeep = visitedList.filter(country => country.cca2 !== id)
        setVisitedList(countriesToKeep)
      }
    return (
       <>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route exact path="/" element={<Title/>}/>
            <Route exact path="/countries" element={<MainContainer onSubmitSearch={onSubmitSearch} countries={countries} onCountryClicked={onCountryClicked}/>}/>
            <Route exact path="/bucket" element={ <BucketList bucketList={bucketList} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry}/>}/>
            <Route exact path="/visited" element={ <VisitedList visitedList={visitedList} onCountryClicked={onCountryClicked} removeVisitedCountry={removeVisitedCountry}/>}/>
            <Route path="/countries/:id" element={<CountryDetail selectedCountry={selectedCountry} addToBucket={addToBucket} addToVisited={addToVisited} bucketList={bucketList} visitedList={visitedList}/>}/>
        </Routes>
       </>
    );
}

export default App;



