const bucketURL = 'http://localhost:9000/api/countries/BucketList';
const visitedURL = 'http://localhost:9000/api/countries/VisitedList';

export const getBucketCountries = () => {
    return fetch(bucketURL)
        .then(res => res.json())
}

export const getVisitedCountries = () => {
    return fetch(visitedURL)
        .then(res => res.json())
}

export const putVisitedCountries = (payload) => {
    return fetch(visitedURL , {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
}

export const postBucketCountry = (payload) => {
    return fetch(bucketURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const postVisitedCountry = (payload) => {
    return fetch(visitedURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteBucketCountry = (id) => {
    return fetch(bucketURL, {
        method: 'DELETE',
        body: JSON.stringify({ id })
    });
}

export const deleteVisitedCountry = (id) => {
    return fetch(visitedURL, {
        method: 'DELETE',
        body: JSON.stringify({ id })
    });
}
