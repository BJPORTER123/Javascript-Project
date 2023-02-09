import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer.js';


const MainContainer = ({ countries, onCountryClicked, onSubmitSearch, error, searchedCountries, visitedList, onBucketClick, onVisitedClick, countryAddSuccess, countryAddError, refreshCountries, resetSearchedItem}) => {

    return (
        <>
            <NavBar resetSearchedItem={resetSearchedItem}/>
            <SearchBar onSubmitSearch={onSubmitSearch} resetSearchedItem={resetSearchedItem} />
            <h4>{countryAddSuccess}{countryAddError}</h4>
            <div>
                {error ?
                    <>
                        {error}
                    </>
                    :
                    <>
                        <CountryList countries={searchedCountries} onCountryClicked={onCountryClicked} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick} />
                    </>
                }
            </div>
            <div>
                <h3 className="list-title">Country Suggestions</h3>
                <div>
                    <button onClick={refreshCountries}>Load New Countries</button>
                </div>

                <CountryList countries={countries.slice(0, 20)}  onCountryClicked={onCountryClicked} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick} />

            </div>

            <Footer/>

        </>

    )
}

export default MainContainer

