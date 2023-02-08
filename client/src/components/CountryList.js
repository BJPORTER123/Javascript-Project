import CountryItem from "./CountryItem";
import './CountryList.css'


const CountryList = ({ countriesSlice, onCountryClicked, visitedList, onBucketClick, onVisitedClick, countryAddSuccess, countryAddError }) => {

    const CountryItems = countriesSlice.map((country) => {
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.cca2} visitedList={visitedList} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick} countryAddSuccess={countryAddSuccess} countryAddError={countryAddError} />
    })

    return (
        <>
            {countryAddSuccess && <div>{countryAddSuccess}</div>}
            {countryAddError && <div>{countryAddError}</div>}
            <div className="container">
                {CountryItems}
            </div>

        </>
    );
}

export default CountryList;

