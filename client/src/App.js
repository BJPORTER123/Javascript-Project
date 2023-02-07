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
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [bucketList, setBucketList] = useState([])
    const [visitedList, setVisitedList] = useState([])

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
        const countriesToKeep = bucketList.filter(country => country.tld !== id)
        setBucketList(countriesToKeep)
      }

      const removeVisitedCountry = (id) => {
        const countriesToKeep = visitedList.filter(country => country.tld !== id)
        setVisitedList(countriesToKeep)
      }
    return (
       <>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route exact path="/" element={<Title/>}/>
            <Route exact path="/countries" element={<MainContainer countries={countries} onCountryClicked={onCountryClicked}/>}/>
            <Route exact path="/bucket" element={ <BucketList bucketList={bucketList} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry}/>}/>
            <Route exact path="/visited" element={ <VisitedList visitedList={visitedList} onCountryClicked={onCountryClicked} removeVisitedCountry={removeVisitedCountry}/>}/>
            <Route path="/countries/:id" element={<CountryDetail selectedCountry={selectedCountry} addToBucket={addToBucket} addToVisited={addToVisited} bucketList={bucketList} visitedList={visitedList}/>}/>
        </Routes>
       </>
    );
}

export default App;



