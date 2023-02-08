import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import SearchedCountries from '../components/SearchedCountries';



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
                        <SearchedCountries searchedCountries={searchedCountries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} />
                    </>
                }
            </div>
            <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} addToVisited={addToVisited} />
        </>

    )
}

export default MainContainer

