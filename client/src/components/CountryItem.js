const CountryItem = ({ country, onCountryClicked }) => {

    const handleClicked = () => {
        onCountryClicked(country)
    }

    return (
        <li onClick={handleClicked}>
            {country.name.common}
            {country.flag}
        </li>
    );
}

export default CountryItem;