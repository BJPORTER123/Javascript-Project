const CountryDetail = ({country}) => {
    return ( 
        <>
            {country.name.common}
            {country.capital}
            {country.flag}

        </>
     );
}
 
export default CountryDetail;