import './CountryItem.css'
import { Link } from "react-router-dom"

function CountryItem({ country, onCountryClicked, onBucketClick, onVisitedClick}) {

    const id = country.cca2

    const handleClicked = () => {
        onCountryClicked(country)
    }

    return (
        <div>
            <li className="country-item" onClick={handleClicked}>
                <Link to={`/countries/${id}`}>

                    <h4 className='country-title'>{country.name.common}</h4>
                    <img className="flag" src={country.flags.png} alt={country.flags.alt} />
                </Link>
            </li>
            <div>
                <button className="button-styling-main" type="Submit" value='add-to-bucket' onClick={() => onBucketClick(country)}>
                    Add Bucket</button>
                <button className="button-styling-main" type="Submit" value='add-to-visited' onClick={() => onVisitedClick(country)}>Add Visited</button>
            </div>
        </div>


    );
}



export default CountryItem;
