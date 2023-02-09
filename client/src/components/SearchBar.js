import './SearchBar.css'
const SearchBar = ({ onSubmitSearch }) => {

    return (
        <form className='search-bar' onSubmit={evt => {
            evt.preventDefault()
            const searchCountry = evt.target.search.value
            console.log(searchCountry)
            onSubmitSearch(searchCountry)
        }}>
            <input className='search-bar-search' id="search" type="text" />
            <input className="search-button" type="submit" value="Search"/>
        </form>
    )

}

export default SearchBar