const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router')


app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology:true})
    .then((client) => {
        const db = client.db('CountryDatabase')
        const countryCollection = db.collection('CountryList')
        const countryRouter = createRouter(countryCollection);
        app.use('/api/countries', countryRouter);
    })
    .catch(console.error);
    
app.listen(9000, ()=>{
    console.log('This app is listening on port 9000')
});

