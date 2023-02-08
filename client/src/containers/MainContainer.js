import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';


const MainContainer = ({ countries, onCountryClicked, onSubmitSearch, error, searchedCountries, visitedList, onBucketClick, onVisitedClick, countryAddSuccess, countryAddError, refreshCountries }) => {

    return (
        <>
            <NavBar />
            <SearchBar onSubmitSearch={onSubmitSearch} />
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

        </>

    )
}

export default MainContainer

