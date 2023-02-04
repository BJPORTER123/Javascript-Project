import React, {useEffect, useState} from 'react'

const MainContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(count => count.slice(0, 20))
        .then(count20 => count20.map(country => {
            return fetch()
        }))
        .then(data => setCountries(data))
      },[]);

      

    return (
        <>

        </>
    )
}

export default MainContainer