import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer.js';


const MainContainer = ({ countries, onCountryClicked, onSubmitSearch, addToVisited, error, searchedCountries, visitedList, onBucketClick, onVisitedClick}) => {

    return (
        <>
            <NavBar />
            <SearchBar onSubmitSearch={onSubmitSearch} />
            <div>
                {error ?
                    <>
                        {error}
                    </>
                    :
                    <>
                        <CountryList countriesSlice={searchedCountries} countries={countries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick}/>
                    </>
                }
            </div>
            <div>
                <h3 className="list-title">Country Suggestions</h3>
                <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick}/>
            </div>
            <Footer/>
        </>

    )
}

export default MainContainer

