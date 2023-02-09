import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer.js';
import "./MainContainer.css"
import '../components/Footer.css'


const MainContainer = ({ countries, onCountryClicked, onSubmitSearch, error, searchedCountries, visitedList, onBucketClick, onVisitedClick, countryAddSuccess, countryAddError, refreshCountries, resetSearchedItem}) => {

    return (
        <div id="page-container">
            <div id ="content-wrap">
            <NavBar resetSearchedItem={resetSearchedItem}/>
            <SearchBar onSubmitSearch={onSubmitSearch} resetSearchedItem={resetSearchedItem} />
            
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
                <h4 className='message-button'>{countryAddSuccess}{countryAddError}</h4>
                <div className="refresh-button">
                    <button  className="button-for-refresh" onClick={refreshCountries}>Load New Countries</button>
                </div>

                <CountryList countries={countries.slice(0, 20)}  onCountryClicked={onCountryClicked} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick} />

            </div>
            </div>
            <Footer/>

        </div>

    )
}

export default MainContainer

