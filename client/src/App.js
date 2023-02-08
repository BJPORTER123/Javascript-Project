import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Title from './Title.js'
import NotFound from './NotFound';
import MainContainer from './containers/MainContainer';
import BucketList from './components/BucketList';
import CountryDetail from './components/CountryDetail';
import VisitedList from './components/VisitedList'
import { getBucketCountries, getVisitedCountries, postBucketCountry, postVisitedCountry } from './services/CountryService';


const App = () => {


    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState(null)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [bucketList, setBucketList] = useState([])
    const [visitedList, setVisitedList] = useState([])
    const [searchedCountries, setSearchedCountries] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        if (searchCountry) {
            fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
                .then(res => {
                    if (res.status === 200) {
                        return res.json();
                    } else if (res.status === 404) {
                        throw new Error('No countries found');
                    } else {
                        throw new Error(`Server error: ${res.status}`);
                    }
                })
                .then(data => setSearchedCountries(data))
                .catch(err => setError(err.message))
        }
    }, [searchCountry]);


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

    const updateVisited = (updatedCountry) => {
        const updatedList = visitedList.map((country)=>{
            if(country._id === updatedCountry._id){
                return{...country, comment: updatedCountry.comment}
            }
            return country
        })
        setVisitedList(updatedList)
            

    }
    const removeBucketCountry = (id) => {
        const countriesToKeep = bucketList.filter(country => country.cca2 !== id)
        setBucketList(countriesToKeep)
    }

    const removeVisitedCountry = (id) => {
        const countriesToKeep = visitedList.filter(country => country.cca2 !== id)
        setVisitedList(countriesToKeep)
    }

    const onBucketClick = (clickedCountry) => {
        if (visitedList.filter(country => country.cca2 === clickedCountry.cca2).length === 0 && bucketList.filter(country => country.cca2 === clickedCountry.cca2).length === 0) {
            postBucketCountry(clickedCountry)
                .then(() => {
                    addToBucket(clickedCountry)
                })
        }
    }

    const onVisitedClick = (clickedCountry) => {
        if (visitedList.filter(country => country.cca2 === clickedCountry.cca2).length === 0 && bucketList.filter(country => country.cca2 === clickedCountry.cca2).length === 0) {
            postVisitedCountry(clickedCountry)
                .then((response) => {
                    const copyOfClickedCountry = { ...clickedCountry }
                    copyOfClickedCountry._id = response.insertedId
                    addToVisited(copyOfClickedCountry)
                    // deleteBucketCountry(countryId)
                    //     .then(() => {
                    //         removeBucketCountry(countryId)
                    //     })
                })
        }
    }

    return (
        <>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route exact path="/" element={<Title />} />

                <Route exact path="/countries" element={
                    <MainContainer onSubmitSearch={onSubmitSearch} countries={countries} onCountryClicked={onCountryClicked} error={error} searchedCountries={searchedCountries} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick}/>
                } />

                <Route exact path="/bucket" element={
                    <BucketList addToVisited={addToVisited} bucketList={bucketList} onCountryClicked={onCountryClicked} removeBucketCountry={removeBucketCountry} />
                } />

                <Route exact path="/visited" element={
                    <VisitedList updateVisited={updateVisited} visitedList={visitedList} onCountryClicked={onCountryClicked} removeVisitedCountry={removeVisitedCountry} />
                } />

                <Route path="/countries/:countryId" element={
                    <CountryDetail removeBucketCountry={removeBucketCountry} selectedCountry={selectedCountry} addToBucket={addToBucket} addToVisited={addToVisited} bucketList={bucketList} visitedList={visitedList} />
                } />
            </Routes>
        </>
    );
}

export default App;



