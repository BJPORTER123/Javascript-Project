import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';


const MainContainer = ({countries, onCountryClicked, onSubmitSearch}) => {


    return (
        <>
            <NavBar />
            <SearchBar onSubmitSearch={onSubmitSearch}/>
            <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} />
        </>

    )
}

export default MainContainer

