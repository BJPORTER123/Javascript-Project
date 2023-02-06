const baseURL = 'http://localhost:9000/api/countries/';

export const getCountries = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const postCountry = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
} 

