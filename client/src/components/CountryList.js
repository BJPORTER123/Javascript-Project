import CountryItem from "./CountryItem";
import './CountryList.css'


const CountryList = ({ countries, onCountryClicked, onBucketClick, onVisitedClick }) => {

    const CountryItems = countries.map((country) => {
        return <CountryItem country={country} onCountryClicked={onCountryClicked} key={country.cca2} onBucketClick={onBucketClick} onVisitedClick={onVisitedClick}  />
    })

    return (
        <>
            <div className="container">
                {CountryItems}
            </div>

        </>
    );
}

export default CountryList;

