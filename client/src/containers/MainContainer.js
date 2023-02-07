import CountryList from '../components/CountryList';
import NavBar from '../components/NavBar';

const MainContainer = ({countries,onCountryClicked }) => {

    return (
        <>
            <NavBar />
            <CountryList countriesSlice={countries.slice(0, 20)} countries={countries} onCountryClicked={onCountryClicked} />
        </>

    )
}

export default MainContainer

            
           

           

