const SearchBar = ({ onSubmitSearch }) => {

    return (
        <form onSubmit={evt => {
            evt.preventDefault()
            const searchTerm = evt.target.search.value
            console.log(searchTerm)
            onSubmitSearch(searchTerm)
        }}>
            <input id="search" type="text" />
            <input type="submit" value="Search" className="search-button" />
        </form>
    )

}

export default SearchBar