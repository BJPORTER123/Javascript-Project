const CountryDetail = ({ selectedCountry, addToBucket, addToVisited }) => {
    return (
        <>
            {selectedCountry.name.common} <br></br>

        
            {selectedCountry.capital} <br>

            </br>
            {selectedCountry.flag}
            <button type="Submit" value='add-to-bucket' onClick={() => addToBucket(selectedCountry)}>Bucket List</button>
            <button type="Submit" value='add-to-visited' onClick={() => addToVisited(selectedCountry)}>Visited List</button>

        </>
    );
}

export default CountryDetail;