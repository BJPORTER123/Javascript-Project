const baseURL = 'http://localhost:9000/api/countries/';

export const getCountries = () => {
    return fetch(baseURL)
    .then(res => res.json())
}
