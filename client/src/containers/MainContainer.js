import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';


const MainContainer = ({ countries, onCountryClicked, onSubmitSearch, addToVisited, error, searchedCountries }) => {

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
                        <CountryList countriesSlice={searchedCountries} countries={countries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} />
                    </>
                }
            </div>
            <div>
                <h3 className="list-title">Countries Suggestions</h3>
                <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} />
            </div>
        </>

    )
}

export default MainContainer

