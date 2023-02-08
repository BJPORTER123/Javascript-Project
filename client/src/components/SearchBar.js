

const SearchBar = ({ countries, onSubmitSearch, onCountryClicked, addToVisited, error }) => {

    return (
        <>
            <form onSubmit={evt => {
                evt.preventDefault()
                const searchCountry = evt.target.search.value
                console.log(searchCountry)
                onSubmitSearch(searchCountry)
            }}>
                <input id="search" type="text" />
                <input type="submit" value="Search" className="search-button" />
            </form>
        </>
    )

}

export default SearchBar